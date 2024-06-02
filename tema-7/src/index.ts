import express, { Express, Request, Response, NextFunction } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";
import usuariosApiRouter from "./routes/usuarios/usuarios";
import autenticacionJWT from "./middlewares/autenticacion";
import autenticacionApiRouter from "./routes/autenticacion/autenticacion";

// Carga y analiza los detalles de configuración del archivo .env en el objeto process.env de Node.js
dotenv.config();

// Crea una aplicación Express y obtiene el valor de la variable de entorno PORT del objeto process.env
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

app.use("/auth", autenticacionApiRouter);
app.use("/api", autenticacionJWT, usuariosApiRouter);

// Acciona el arrancar de la app y se queda escuchando
app.listen(port, async () => {
  await sequelize.sync(); // Sincroniza el modelo con la base de datos
  console.log(`[server]: Server levantado en: http://localhost:${port}`);
});
