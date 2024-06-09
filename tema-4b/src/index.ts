import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usuariosApiRouter from "./routes/usuarios/usuarios";

dotenv.config();

const uri = process.env.MONGODB_URI || "";

async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", usuariosApiRouter);

// Acciona el arrancar de la app y se queda escuchando
app.listen(port, async () => {
  console.log(`[server]: Server levantado en: http://localhost:${port}`);
});
