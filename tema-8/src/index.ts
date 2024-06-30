import express, { Express, Request, Response } from "express";
import { Server } from "socket.io";
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import https from "https";
import fs from "fs";
import sequelize from "./config/database";
import { engine } from "express-handlebars"; // Importa el motor de Handlebars
import dotenv from "dotenv";
import passport from "./config/passport"; // Importa la configuración de Passport.js
import usuariosApiRouter from "./routes/usuarios/usuarios";
import healthCheckApiRoutes from "./routes/health/health";
// import autenticacionApiRouter from "./routes/autenticacion/autenticacion";
import swaggerConfig from "./config/swagger";

// Carga y analiza los detalles de configuración del archivo .env en el objeto process.env de Node.js
dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [nodeProfilingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

// Crea una aplicación Express y obtiene el valor de la variable de entorno PORT del objeto process.env
const app: Express = express();
const port = process.env.PORT || 3000;

// Configura Handlebars
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");
// app.set("views", "./src/views"); // Directorio de las plantillas

app.set("view engine", "pug");
app.set("views", "./src/templates");

// Lee el certificado y la clave privada
const key = fs.readFileSync("./certs/key.pem", "utf8");
const cert = fs.readFileSync("./certs/cert.pem", "utf8");
const credentials = { key, cert };

// Crea un servidor HTTP para Socket.IO
const httpsServer = https.createServer(credentials, app);
// const io = new Server(httpsServer);

Sentry.setupExpressErrorHandler(app);

// Configura Swagger
swaggerConfig(app);

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Define una ruta de ejemplo para probar Handlebars
app.get("/hello", (req: Request, res: Response) => {
  res.render("hello", { name: "lucas 2" });
});

app.get("/", (req: Request, res: Response) => {
  res.render("index", { name: "lucas 2" });
});

// Inicializa Passport
app.use(passport.initialize());

// app.use("/auth", autenticacionApiRouter);

app.use("/health", healthCheckApiRoutes);

app.use(
  "/api",
  //passport.authenticate("jwt", { session: false }),
  usuariosApiRouter
);

// io.on("connection", (socket) => {
//   console.log("Nuevo cliente conectado");

//   // Envía una notificación al cliente cuando se conecta
//   socket.emit("notification", "Bienvenido al servidor!");`

//   // Maneja notificaciones desde el cliente
//   socket.on("sendNotification", (message) => {
//     console.log("Notificación recibida del cliente:", message);
//     io.emit("notification", message);
//   });

//   // Maneja la verificación de conexión bidireccional
//   socket.on("checkConnection", () => {
//     console.log("Verificación de conexión recibida del cliente");
//     socket.emit("connectionVerified", "Conexión bidireccional verificada");
//   });

//   socket.on("disconnect", () => {
//     console.log("Cliente desconectado");
//   });
// });

// Crea el servidor HTTPS
httpsServer.listen(port, async () => {
  await sequelize.sync(); // Sincroniza el modelo con la base de datos
  Sentry.captureMessage("Hola lucas", "info");
  console.log(`[server]: Server levantado en: https://localhost:${port}`);
});
