import { Request, Response } from "express";
import Usuario from "../../models/usuarios/usuarios";

type TipoDeRespuesta = "texto" | "html" | "json";

export const obtenerUsarios = async (
  req: Request,
  res: Response,
  tipoDeRespuesta: TipoDeRespuesta
) => {
  const { nombre } = req.query;
  const todosLosUsuarios = await Usuario.findAll();
  const dataUsuarios = nombre
    ? todosLosUsuarios.filter((usuario) => usuario.nombre === nombre)
    : todosLosUsuarios;

  try {
    if (tipoDeRespuesta === "json") {
      res.status(200).json(dataUsuarios);
      return;
    } else if (tipoDeRespuesta === "texto") {
      res.status(200).send(JSON.stringify(dataUsuarios));
      return;
    }
    const data = `
        <html>
        ${dataUsuarios.map((usuario) => usuario)}
        </html>
      `;
    res.status(200).send(data);
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

export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    const data = {
      status: "400",
      message: "No contiene nombre o apellido en el cuerpo",
    };

    res.status(400).json(data);
    return;
  }

  try {
    const nuevoUsuario = await Usuario.create({ nombre, apellido });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    const data = {
      status: 400,
      message: error,
    };

    console.error(error);

    res.status(400).json(data);
  }
};

export const modificarUsuario = async (req: Request, res: Response) => {
  console.log("modificarUsuario");
  const { id } = req.params;
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    const data = {
      status: "400",
      message: "No contiene nombre o apellido en el cuerpo",
    };

    res.status(400).json(data);
    return;
  }

  try {
    const usuarioObtenido = await Usuario.findByPk(id);

    if (!usuarioObtenido) {
      const data = {
        status: 404,
        message: "User Not Found",
      };
      res.status(404).json(data);
      return;
    }

    const usuarioModificado = await usuarioObtenido.update({
      nombre,
      apellido,
    });
    res.status(201).json(usuarioModificado);
  } catch (error) {
    const data = {
      status: 400,
      message: error,
    };

    console.error(error);
    res.status(400).json(data);
  }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarioObtenido = await Usuario.findByPk(id);

    if (!usuarioObtenido) {
      const data = {
        status: 404,
        message: "User Not Found",
      };
      res.status(404).json(data);
      return;
    }

    const usuarioEliminado = await usuarioObtenido.destroy();
    res.status(201).json(usuarioEliminado);
  } catch (error) {
    const data = {
      status: 400,
      message: error,
    };

    console.error(error);
    res.status(400).json(data);
  }
};
