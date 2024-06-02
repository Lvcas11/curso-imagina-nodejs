import sequelize from "./config/database";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import loginMiddleware from "./middlewares/loginMiddleware";
import usuariosApiRouter from "./routes/usuarios/usuarios";

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

/*
  Middleware para parsear el cuerpo de las solicitudes en formato JSON
*/
app.use(loginMiddleware);
app.use(express.json());

/*
  Estableciendo el router
*/

app.use("/api", usuariosApiRouter);

/*
  Acciona el arrancar de la app y se queda escuchando
 */
app.listen(port, async () => {
  await sequelize.sync(); // Sincroniza el modelo con la base de datos
  console.log(`[server]: Server levantado en: http://localhost:${port}`);
});
