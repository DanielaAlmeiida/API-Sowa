import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    idUser: { type: String },
    idMatch: { type: String },
    data: { type: Date, default: Date.now },
}, { versionKey: false });

const match = mongoose.model("matches", matchSchema);

export default match;