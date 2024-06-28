// src/controllers/autenticacion/autenticacion.js
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { roles } from "../../config/roles";
import Autenticacion from "../../models/autenticacion/autenticacion";
import Usuario from "../../models/usuarios/usuarios"; // Asegúrate de importar tu modelo de Usuario
import bcrypt from "bcrypt";

const secretKey = process.env.JWT_SECRET || "tu_secreto_aqui";

export const login = async (req: Request, res: Response) => {
  const { nombre, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { nombre } });

    if (!usuario) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const payload = { id: usuario.id, nombre: usuario.nombre, rol: roles.user };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

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
