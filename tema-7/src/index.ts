import express, { Express } from "express";
import https from "https";
import fs from "fs";
import sequelize from "./config/database";
import dotenv from "dotenv";
import passport from "./config/passport"; // Importa la configuración de Passport.js
import usuariosApiRouter from "./routes/usuarios/usuarios";
// import autenticacionApiRouter from "./routes/autenticacion/autenticacion";
import swaggerConfig from "./config/swagger";

// Carga y analiza los detalles de configuración del archivo .env en el objeto process.env de Node.js
dotenv.config();

// Crea una aplicación Express y obtiene el valor de la variable de entorno PORT del objeto process.env
const app: Express = express();
const port = process.env.PORT || 3000;

// Lee el certificado y la clave privada
const key = fs.readFileSync("./certs/key.pem", "utf8");
const cert = fs.readFileSync("./certs/cert.pem", "utf8");
const credentials = { key, cert };

// Configura Swagger
swaggerConfig(app);

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Inicializa Passport
app.use(passport.initialize());

// app.use("/auth", autenticacionApiRouter);
app.use(
  "/api",
  passport.authenticate("jwt", { session: false }),
  usuariosApiRouter
);

// Crea el servidor HTTPS
https.createServer(credentials, app).listen(port, async () => {
  await sequelize.sync(); // Sincroniza el modelo con la base de datos
  console.log(`[server]: Server levantado en: https://localhost:${port}`);
});
