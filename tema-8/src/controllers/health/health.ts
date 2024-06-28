import { Request, Response } from "express";
import ErrorHandler from "../../errores/errorHandler";
import { TipoDeRespuesta, tiposDeMetodos } from "../../types";

export const obtenerPing = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: 200, message: "pong" });
    return;
  } catch (error) {
    ErrorHandler({
      metodo: tiposDeMetodos.GET,
      error,
      res,
    });
  }
};
