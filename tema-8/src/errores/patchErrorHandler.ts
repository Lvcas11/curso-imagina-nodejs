import { Response } from "express";
import { tiposDeEstados, tiposDeMetodos } from "../types";

export const patchErrorHandler = (mensaje: string, res: Response) => {
  if (mensaje.includes("not allowed")) {
    return res.status(tiposDeEstados.FORBIDDEN).json({
      status: tiposDeEstados.FORBIDDEN.toString(),
      message: `Operación no permitida: ${mensaje}`,
    });
  }
  return res.status(tiposDeEstados.INTERNAL_SERVER_ERROR).json({
    status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
    message: `Error en ${tiposDeMetodos.PATCH}: ${mensaje}`,
  });
};
