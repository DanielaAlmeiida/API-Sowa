import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    logradouro: { type: String },
    cidade: { type: String },
    uf: { type: String },
    bairro: { type: String },
    cep: { type: String, required: true }
}, { versionKey: false });

const endereco = mongoose.model("enderecos", enderecoSchema);

export { endereco, enderecoSchema }