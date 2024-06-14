import mongoose from "mongoose";

const avaliacaoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    menssagem: { type: String },
    nota: { type: Number, required: true },
    idUser: { type: String },
    idMatch: { type: String },
    data: { type: Date, default: Date.now },
}, { versionKey: false });

const avaliacao = mongoose.model("avaliacoes", avaliacaoSchema);

export default avaliacao;