import { Request, Response, NextFunction } from "express";
import { roles } from "../config/roles";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "tu_secreto_aqui"; // Debe ser una clave segura y almacenada en una variable de entorno

const autenticacionJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  // @ts-ignore
  const usuario = req.usuario;

  console.log("usuario logueado", usuario);

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extrae el token del encabezado

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token inválido
      }

      // 1. comprobar el tipo de llamado que quiere hacer y el rol en cuestion
      // 2. agregar un if que si no tiene permisos, se hace una redirección devolviendo un unothorized
      next();
    });
  } else {
    res.sendStatus(401); // No se proporcionó el token
  }
};

export default autenticacionJWT;
