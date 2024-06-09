import { Request, Response } from "express";
import Usuario from "../../models/usuarios/usuarios";

export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error creando el usuario" });
  }
};

export const obtenerUsarios = async (
  req: Request,
  res: Response,
  tipo: "json" | "texto" | "html"
) => {
  try {
    const usuarios = await Usuario.find();
    if (tipo === "json") {
      res.status(200).json(usuarios);
    } else if (tipo === "texto") {
      res
        .status(200)
        .send(usuarios.map((u) => `${u.nombre} ${u.apellido}`).join(", "));
    } else if (tipo === "html") {
      res
        .status(200)
        .send(
          `<ul>${usuarios
            .map((u) => `<li>${u.nombre} ${u.apellido}</li>`)
            .join("")}</ul>`
        );
    }
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo los usuarios" });
  }
};

export const modificarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error modificando el usuario" });
  }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando el usuario" });
  }
};
