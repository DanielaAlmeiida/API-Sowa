import { endereco } from "../models/Endereco.js";

class EnderecoController {
    static async listarEndereco (req, res) {
        try {
            const listaEndereco = await endereco.find();
            res.status(200).json(listaEndereco);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarEnderecoPorId (req, res) {
        try {
            const id = req.params.id;
            const enderecoId = await endereco.findById(id);
            res.status(200).json(enderecoId);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do endereço` });
        }
    };

    static async cadastrarEndereco (req, res) {
        try {
            const novoEndereco = await endereco.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", endereco: novoEndereco });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar endereço` });
        }
    };

    static async atualizarEndereco (req, res) {
        try {
            const id = req.params.id;
            await endereco.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ messege: "endereço atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do endereço` });
        }
    };

    static async deletarEndereço (req, res) {
        try {
            const id = req.params.id;
            await endereco.findByIdAndDelete(id);
            res.status(200).json({ messege: "endereço removido" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao remover endereço` });
        }
    }
};

export default EnderecoController;