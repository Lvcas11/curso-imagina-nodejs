// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/usuarios/usuarios";

/*
  Carga y analiza los detalles de configuración del archivo .env
  en el objeto process.env de Node.js
*/
dotenv.config();

/*
  Crea una aplicación Express y obtiene el
  valor de la variable de entorno PORT
  del objeto process.env
*/
const app: Express = express();
const port = process.env.PORT || 3000;
console.log(" este es el puerto", port);

/*
  Middleware para parsear el cuerpo de las solicitudes en formato JSON
*/
app.use(express.json());

/*
  Estableciendo el router
*/

app.use("/api", apiRouter);

/*
  Acciona el arrancar de la app y se queda escuchando
 */
app.listen(port, () => {
  console.log(`[server]: Server levantado en: http://localhost:${port}`);
});
