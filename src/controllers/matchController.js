import match from "../models/Matches.js";

class matchController {
    static async listarMatches (req, res) {
        try {
            const listamatch = await match.find();
            res.status(200).json(listamatch);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async cadastrarMatch (req, res) {
        try {
            const novaMatch = await match.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", match: novaMatch });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Match` });
        }
    };

    static async deletarMatch (req, res) {
        try {
            const id = req.params.id;
            await match.findByIdAndDelete(id);
            res.status(200).json({ messege: "match removida" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao remover match` });
        }
    }
};

export default matchController;