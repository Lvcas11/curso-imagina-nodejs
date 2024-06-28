import express from "express";
import { obtenerPing } from "../../controllers/health/health";

const healthCheckApiRouter = express.Router();

healthCheckApiRouter.get("/ping", (req, res) => obtenerPing(req, res));

export default healthCheckApiRouter;
