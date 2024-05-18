import express, { Express, Request, Response } from "express";
import {
  crearUsuario,
  obtenerUsario,
} from "../../controllers/usuarios/usuarios";

/*
  Estableciendo el router
*/

const apiRouter = express.Router();

// GET
apiRouter.get("/usuarios", (req, res) => obtenerUsario(req, res, "json"));
apiRouter.get("/usuarios-texto", (req, res) =>
  obtenerUsario(req, res, "texto")
);
apiRouter.get("/usuarios-html", (req, res) => obtenerUsario(req, res, "html"));

// POST
apiRouter.post("/usuarios", crearUsuario);

export default apiRouter;
