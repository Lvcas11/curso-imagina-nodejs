import { Response } from "express";

/**
 * Objeto que mapea métodos HTTP en mayúsculas a sus representaciones en mayúsculas.
 */
export const tiposDeMetodos = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

/**
 * Objeto que mapea códigos de estado HTTP a sus representaciones.
 */
export const tiposDeEstados = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
} as const;

/**
 * Propiedades esperadas por el manejador de errores.
 * @param metodo - Método HTTP que generó el error.
 * @param error - Error que se necesita manejar.
 * @param res - Objeto de respuesta de Express.
 */
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

  console.error(`[${tiposDeMetodos[metodo]}] -> ${mensaje}`);

  switch (metodo) {
    case tiposDeMetodos.PUT:
      // Manejo de errores específicos para PUT
      if (mensaje.includes("not found")) {
        return res.status(tiposDeEstados.NOT_FOUND).json({
          status: tiposDeEstados.NOT_FOUND.toString(),
          message: `No se pudo encontrar el recurso: ${mensaje}`,
        });
      }
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error en ${tiposDeMetodos[metodo]}: ${mensaje}`,
      });

    case tiposDeMetodos.POST:
      // Manejo de errores específicos para POST
      if (mensaje.includes("validation")) {
        return res.status(tiposDeEstados.BAD_REQUEST).json({
          status: tiposDeEstados.BAD_REQUEST.toString(),
          message: `Error de validación: ${mensaje}`,
        });
      }
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error en ${tiposDeMetodos[metodo]}: ${mensaje}`,
      });

    case tiposDeMetodos.GET:
      // Manejo de errores específicos para GET
      if (mensaje.includes("not found")) {
        return res.status(tiposDeEstados.NOT_FOUND).json({
          status: tiposDeEstados.NOT_FOUND.toString(),
          message: `Recurso no encontrado: ${mensaje}`,
        });
      }
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error en ${tiposDeMetodos[metodo]}: ${mensaje}`,
      });

    case tiposDeMetodos.PATCH:
      // Manejo de errores específicos para PATCH
      if (mensaje.includes("not allowed")) {
        return res.status(tiposDeEstados.FORBIDDEN).json({
          status: tiposDeEstados.FORBIDDEN.toString(),
          message: `Operación no permitida: ${mensaje}`,
        });
      }
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error en ${tiposDeMetodos[metodo]}: ${mensaje}`,
      });

    case tiposDeMetodos.DELETE:
      // Manejo de errores específicos para DELETE
      if (mensaje.includes("not found")) {
        return res.status(tiposDeEstados.NOT_FOUND).json({
          status: tiposDeEstados.NOT_FOUND.toString(),
          message: `Recurso no encontrado para eliminar: ${mensaje}`,
        });
      }
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error en ${tiposDeMetodos[metodo]}: ${mensaje}`,
      });

    default:
      // Caso por defecto si el método no coincide con ninguno conocido
      return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
        status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
        message: `Error inesperado: ${mensaje}`,
      });
  }
};

export default ErrorHandler;
