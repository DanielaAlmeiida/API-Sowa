import { endereco } from "../models/Endereco.js";
import usuario from "../models/Usuario.js";

class UsuarioController {
    static async listarUsuarios (req, res) {
        try {
            const listaUsuarios = await usuario.find();
            res.status(200).json(listaUsuarios);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarUsuarioPorId (req, res) {
        try {
            const id = req.params.id;
            const usuarioId = await usuario.findById(id);
            res.status(200).json(usuarioId);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do usuario` });
        }
    };

    static async cadastrarUsuario (req, res) {
        const novoUsuario = req.body
        try {
            const enderecoEncontrado = await endereco.findById(novoUsuario.endereco);
            const usuarioCompleto = { ...novoUsuario, endereco: { ... enderecoEncontrado._doc } };
            const usuarioCriado = await usuario.create(usuarioCompleto)
            res.status(201).json({ message: "Criado com sucesso", usuario: usuarioCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario` });
        }
    };

    static async atualizarUsuario (req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ messege: "usuario atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do usuario` });
        }
    };

    static async deletarUsuario (req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndDelete(id)
            res.status(200).json({ messege: "usuario removido" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao remover usuario` });
        }
    };

    static async listarUsuarioPorAreas (req, res) {
        const filtros = req.query;
        const consulta = {};

        for (const chave in filtros) {
            if (filtros.hasOwnProperty(chave)) {
                consulta[chave] = { $regex: new RegExp(filtros[chave], 'i') };
            }
        }
    
        try {
            const usuarios = await usuario.find(consulta);
            res.status(200).json(usuarios);
        /*
        const query = req.query;
        try {
            const usuarios = await usuario.find({$or: Object.keys(query).map(key => ({ [key]: { $regex: new RegExp(query[key], 'i') } }))});
            res.status(200).json(usuarios);*/
            /*const usuariosPorAreas = await usuario.find({ areas: { $regex: new RegExp(areas, 'i') } });
            res.status(200).json(usuariosPorAreas);*/
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    };
};

export default UsuarioController;