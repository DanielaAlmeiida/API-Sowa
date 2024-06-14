import notificacao from "../models/Notificacao.js";

class NotificacaoController {
    static async listarNotificacao (req, res) {
        try {
            const listaNotificacao = await notificacao.find();
            res.status(200).json(listaNotificacao);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async cadastrarNotificacao (req, res) {
        try {
            const novaNotificacao = await notificacao.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", notificacao: novaNotificacao });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar notificação` });
        }
    };

    static async atualizarNotificacao (req, res) {
        try {
            const id = req.params.id;
            await notificacao.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ messege: "notificação atualizada" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização da notificação` });
        }
    };

    static async deletarNotificacao (req, res) {
        try {
            const id = req.params.id;
            await notificacao.findByIdAndDelete(id);
            res.status(200).json({ messege: "notificação removida" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao remover notificação` });
        }
    }
};

export default NotificacaoController;