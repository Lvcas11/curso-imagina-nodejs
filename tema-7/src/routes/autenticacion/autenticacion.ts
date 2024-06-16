import express from "express";
import {
  login,
  obtenerTokens,
} from "../../controllers/autenticacion/autenticacion";

/*
  Estableciendo el router
*/

const autenticacionApiRouter = express.Router();

// POST
autenticacionApiRouter.post("/login", login);

// GET
// autenticacionApiRouter.get("/logout", (req, res) =>
//   obtenerUsarios(req, res, "texto")
// );

// GET
autenticacionApiRouter.get("/obtener-tokens", obtenerTokens);

export default autenticacionApiRouter;
