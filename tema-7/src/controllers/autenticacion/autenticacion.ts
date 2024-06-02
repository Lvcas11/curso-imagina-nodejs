import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { roles } from "../../config/roles";
import Autenticacion from "../../models/autenticacion/autenticacion";

type TipoDeRespuesta = "texto" | "html" | "json";

const secretKey = process.env.JWT_SECRET || "tu_secreto_aqui";

export const login = async (req: Request, res: Response) => {
  const nombre = req.body.nombre;
  const contrasena = req.body.contrasena;
  // 1. chequear que existe tanto usuario como contraseña o hacer un redirect
  // 2. en caso en que contenga ambos se tiene que ir a comprobar en la DB que el usuario exista
  // 3. debemos guardar en req.usuario este valor y dentro de el su rol preestablecido.
  const usuario = { nombre, contrasena, rol: roles.user };

  try {
    const token = jwt.sign(usuario, secretKey, { expiresIn: "1h" });
    console.log("se pudo crear el token", token);
    await Autenticacion.create({ token });
    res.json({ token });
  } catch (error) {
    const data = {
      status: 500,
      message: error,
    };

    console.error(error);

    res.status(400).json(data);
  }
};

export const obtenerTokens = async (req: Request, res: Response) => {
  const todasLasAuth = await Autenticacion.findAll();

  try {
    res.status(200).json(todasLasAuth);
    return;
  } catch (error) {
    const data = {
      status: 500,
      message: error,
    };

    console.error(error);

    res.status(500).json(data);
  }
};
