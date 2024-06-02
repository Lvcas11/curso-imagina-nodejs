import express, { Express, Request, Response } from "express";
import {
  crearUsuario,
  eliminarUsuario,
  modificarUsuario,
  obtenerUsarios,
} from "../../controllers/usuarios/usuarios";

/*
  Estableciendo el router
*/

const usuariosApiRouter = express.Router();

// GET
usuariosApiRouter.get("/usuarios", (req, res) =>
  obtenerUsarios(req, res, "json")
);
usuariosApiRouter.get("/usuarios-texto", (req, res) =>
  obtenerUsarios(req, res, "texto")
);
usuariosApiRouter.get("/usuarios-html", (req, res) =>
  obtenerUsarios(req, res, "html")
);

// POST
usuariosApiRouter.post("/usuarios", crearUsuario);

// PUT
usuariosApiRouter.put("/usuarios/:id", modificarUsuario);

// DELETE
usuariosApiRouter.delete("/usuarios/:id", eliminarUsuario);

export default usuariosApiRouter;
