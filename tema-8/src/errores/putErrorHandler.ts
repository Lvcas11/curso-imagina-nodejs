import { Response } from "express";
import { tiposDeEstados, tiposDeMetodos } from "../types";

export const putErrorHandler = (mensaje: string, res: Response) => {
  if (mensaje.includes("not found")) {
    return res.status(tiposDeEstados.NOT_FOUND).json({
      status: tiposDeEstados.NOT_FOUND.toString(),
      message: `No se pudo encontrar el recurso: ${mensaje}`,
    });
  }
  return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
    status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
    message: `Error en ${tiposDeMetodos.PUT}: ${mensaje}`,
  });
};
