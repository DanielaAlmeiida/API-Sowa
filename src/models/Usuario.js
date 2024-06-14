import mongoose from "mongoose";
import { enderecoSchema } from "./Endereco.js"

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: { type: String, required: true },
    telefone: { type: String, required: true },
    areas: { type: String, required: true },
    experiencias: { type: String, required: true },
    academicas: { type: String, required: true },
    endereco: enderecoSchema
}, { versionKey: false });

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;