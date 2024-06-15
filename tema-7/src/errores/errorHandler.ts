import { Response } from "express";
import { tiposDeEstados, tiposDeMetodos } from "../types";
import { getErrorHandler } from "./getErrorHandler";
import { postErrorHandler } from "./postErrorHandler";
import { putErrorHandler } from "./putErrorHandler";
import { patchErrorHandler } from "./patchErrorHandler";
import { deleteErrorHandler } from "./deleteErrorHandler";

type ErrorHandlerProps = {
  metodo: keyof typeof tiposDeMetodos;
  error: Error | string | unknown;
  res: Response;
};

/**
 * Función para manejar errores en base al método HTTP.
 * @param metodo - Método HTTP que generó el error.
 * @param error - Error que se necesita manejar.
 * @param res - Objeto de respuesta de Express.
 * @returns - Respuesta de error con el estatus y mensaje apropiado.
 */
const ErrorHandler = ({ metodo, error, res }: ErrorHandlerProps) => {
  // Mapa de métodos HTTP a sus representaciones en mayúsculas.
  const errorParseado = new Error(String(error));
  const mensaje = errorParseado.message;

  // @ts-ignore
  console.error(`[${tiposDeMetodos[metodo]}] -> ${mensaje}`);

  switch (metodo) {
    case tiposDeMetodos.GET:
      return getErrorHandler(mensaje, res);

    case tiposDeMetodos.POST:
      return postErrorHandler(mensaje, res);

    case tiposDeMetodos.PUT:
      return putErrorHandler(mensaje, res);

    case tiposDeMetodos.PATCH:
      return patchErrorHandler(mensaje, res);

    case tiposDeMetodos.DELETE:
      return deleteErrorHandler(mensaje, res);

    default:
      // Caso por defecto si el método no coincide con ninguno conocido
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error inesperado: ${mensaje}`,
      });
  }
};

export default ErrorHandler;
