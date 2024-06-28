import express from "express";
import {
  crearUsuario,
  eliminarUsuario,
  modificarUsuario,
  obtenerUsuarios,
} from "../../controllers/usuarios/usuarios";

const usuariosApiRouter = express.Router();

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios.
 *     description: Retorna todos los usuarios en formato JSON.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.get("/usuarios", (req, res) =>
  obtenerUsuarios(req, res, "json")
);

/**
 * @swagger
 * /api/usuarios-texto:
 *   get:
 *     summary: Obtiene todos los usuarios en formato de texto.
 *     description: Retorna todos los usuarios en formato de texto plano.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente en formato texto.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.get("/usuarios-texto", (req, res) =>
  obtenerUsuarios(req, res, "texto")
);

/**
 * @swagger
 * /api/usuarios-html:
 *   get:
 *     summary: Obtiene todos los usuarios en formato HTML.
 *     description: Retorna todos los usuarios en formato HTML.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente en formato HTML.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.get("/usuarios-html", (req, res) =>
  obtenerUsuarios(req, res, "html")
);

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crea un nuevo usuario.
 *     description: Crea un nuevo usuario con los datos proporcionados.
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *       400:
 *         description: Error de validación en los datos del usuario.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.post("/usuarios", crearUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Modifica un usuario existente por ID.
 *     description: Modifica un usuario existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a modificar.
 *     responses:
 *       200:
 *         description: Usuario modificado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.put("/usuarios/:id", modificarUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID.
 *     description: Elimina un usuario existente por su ID.
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
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
usuariosApiRouter.delete("/usuarios/:id", eliminarUsuario);

export default usuariosApiRouter;
