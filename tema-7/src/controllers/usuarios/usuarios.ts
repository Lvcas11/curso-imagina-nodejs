import { Request, Response } from "express";
import Usuario from "../../models/usuarios/usuarios";
import ErrorHandler from "../../errores/errorHandler";
import { TipoDeRespuesta, tiposDeMetodos } from "../../types";

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para la gestión de usuarios.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del usuario.
 *         nombre:
 *           type: string
 *           description: Nombre del usuario.
 *         apellido:
 *           type: string
 *           description: Apellido del usuario.
 *       required:
 *         - nombre
 *         - apellido
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene una lista de usuarios.
 *     description: Recupera una lista de usuarios, con opción de filtrar por nombre.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Filtra usuarios por nombre
 *     responses:
 *       200:
 *         description: Una lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
export const obtenerUsuarios = async (
  req: Request,
  res: Response,
  tipoDeRespuesta: TipoDeRespuesta
) => {
  const { nombre } = req.query;
  try {
    const todosLosUsuarios = await Usuario.findAll();
    const dataUsuarios = nombre
      ? todosLosUsuarios.filter((usuario) => usuario.nombre === nombre)
      : todosLosUsuarios;

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
  } catch (error) {
    ErrorHandler({
      metodo: tiposDeMetodos.GET,
      error,
      res,
    });
  }
};

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crea un nuevo usuario.
 *     description: Crea un nuevo usuario con nombre y apellido.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario.
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario.
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Solicitud inválida, falta nombre o apellido.
 *       500:
 *         description: Error del servidor.
 */
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
    ErrorHandler({
      metodo: tiposDeMetodos.POST,
      error,
      res,
    });
  }
};

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Modifica un usuario existente.
 *     description: Actualiza el nombre y apellido de un usuario específico.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a modificar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del usuario.
 *               apellido:
 *                 type: string
 *                 description: Nuevo apellido del usuario.
 *     responses:
 *       200:
 *         description: Usuario modificado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Solicitud inválida, falta nombre o apellido.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error del servidor.
 */
export const modificarUsuario = async (req: Request, res: Response) => {
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
      const error = new Error("Usuario no encontrado");
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
    res.status(200).json(usuarioModificado);
  } catch (error) {
    ErrorHandler({
      metodo: tiposDeMetodos.PUT,
      error,
      res,
    });
  }
};

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario existente.
 *     description: Elimina un usuario específico por ID.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error del servidor.
 */
export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarioObtenido = await Usuario.findByPk(id);

    if (!usuarioObtenido) {
      const error = new Error("Usuario no encontrado");
      ErrorHandler({
        metodo: tiposDeMetodos.DELETE,
        error,
        res,
      });
      return;
    }

    await usuarioObtenido.destroy();
    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    ErrorHandler({
      metodo: tiposDeMetodos.DELETE,
      error,
      res,
    });
  }
};
