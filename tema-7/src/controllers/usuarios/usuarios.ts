import { Request, Response } from "express";
import Usuario from "../../models/usuarios/usuarios";
import ErrorHandler, { tiposDeMetodos } from "../../errores/errorHandler";

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
    // Manejo de errores
    ErrorHandler({
      metodo: tiposDeMetodos.GET,
      error,
      res,
    });
  }
};

export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    const error = new Error("No contiene nombre o apellido en el cuerpo");
    ErrorHandler({
      metodo: tiposDeMetodos.POST,
      error,
      res,
    });
    return;
  }

  try {
    const nuevoUsuario = await Usuario.create({ nombre, apellido });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    // Manejo de errores
    ErrorHandler({
      metodo: tiposDeMetodos.POST,
      error,
      res,
    });
  }
};

export const modificarUsuario = async (req: Request, res: Response) => {
  console.log("modificarUsuario");
  const { id } = req.params;
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    const error = new Error("No contiene nombre o apellido en el cuerpo");
    ErrorHandler({
      metodo: tiposDeMetodos.PUT,
      error,
      res,
    });
    return;
  }

  try {
    const usuarioObtenido = await Usuario.findByPk(id);

    if (!usuarioObtenido) {
      const error = new Error("User Not Found");
      ErrorHandler({
        metodo: tiposDeMetodos.PUT,
        error,
        res,
      });
      return;
    }

    const usuarioModificado = await usuarioObtenido.update({
      nombre,
      apellido,
    });
    res.status(201).json(usuarioModificado);
  } catch (error) {
    // Manejo de errores
    ErrorHandler({
      metodo: tiposDeMetodos.PUT,
      error,
      res,
    });
  }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarioObtenido = await Usuario.findByPk(id);

    if (!usuarioObtenido) {
      const error = new Error("User Not Found");
      ErrorHandler({
        metodo: tiposDeMetodos.DELETE,
        error,
        res,
      });
      return;
    }

    const usuarioEliminado = await usuarioObtenido.destroy();
    res.status(201).json(usuarioEliminado);
  } catch (error) {
    // Manejo de errores
    ErrorHandler({
      metodo: tiposDeMetodos.DELETE,
      error,
      res,
    });
  }
};
