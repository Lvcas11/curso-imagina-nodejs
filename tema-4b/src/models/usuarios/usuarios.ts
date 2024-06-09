import mongoose, { Schema, Document } from "mongoose";

interface IUsuario extends Document {
  nombre: string;
  apellido: string;
}

const UsuarioSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
});

const Usuario = mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
