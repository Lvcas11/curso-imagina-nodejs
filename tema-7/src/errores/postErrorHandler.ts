import { Response } from "express";
import { tiposDeEstados, tiposDeMetodos } from "../types";

export const postErrorHandler = (mensaje: string, res: Response) => {
  if (mensaje.includes("validation")) {
    return res.status(tiposDeEstados.BAD_REQUEST).json({
      status: tiposDeEstados.BAD_REQUEST.toString(),
      message: `Error de validación: ${mensaje}`,
    });
  }
  return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
    status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
    message: `Error en ${tiposDeMetodos.POST}: ${mensaje}`,
  });
};
