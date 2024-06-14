import avaliacao from "../models/Avaliacao.js";

class AvaliacaoController {
    static async listarAvaliacao (req, res) {
        try {
            const listaAvalicao = await avaliacao.find();
            res.status(200).json(listaAvalicao);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async cadastrarAvaliacao (req, res) {
        try {
            const novaAvaliacao = await avaliacao.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", avaliacao: novaAvaliacao });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar endereço` });
        }
    };

    static async atualizarAvaliacao (req, res) {
        try {
            const id = req.params.id;
            await avaliacao.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ messege: "avaliação atualizada" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização da avaliação` });
        }
    };

    static async deletarAvaliacao (req, res) {
        try {
            const id = req.params.id;
            await avaliacao.findByIdAndDelete(id);
            res.status(200).json({ messege: "avaliação removida" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao remover avaliação` });
        }
    }
};

export default AvaliacaoController;