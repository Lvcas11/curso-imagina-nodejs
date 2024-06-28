import { Response } from "express";
import { tiposDeEstados, tiposDeMetodos } from "../types";

export const getErrorHandler = (mensaje: string, res: Response) => {
  if (mensaje.includes("not found")) {
    return res.status(tiposDeEstados.NOT_FOUND).json({
      status: tiposDeEstados.NOT_FOUND.toString(),
      message: `Recurso no encontrado: ${mensaje}`,
    });
  }
  return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
    status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
    message: `Error en ${tiposDeMetodos.GET}: ${mensaje}`,
  });
};
