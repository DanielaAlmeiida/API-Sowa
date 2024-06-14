import mongoose from "mongoose";

const notificacaoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    mensagem: { type: String, required: true },
    idUser: { type: String },
    idMatch: { type: String },
    data: { type: Date, default: Date.now },
}, { versionKey: false });

const notificacao = mongoose.model("notificacoes", notificacaoSchema);

export default notificacao;