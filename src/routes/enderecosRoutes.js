import express from "express";
import EnderecoController from "../controllers/enderecoController.js";

const routes = express.Router();

routes.get("/enderecos", EnderecoController.listarEndereco);
routes.get("/endereco/:id", EnderecoController.listarEnderecoPorId);
routes.post("/endereco", EnderecoController.cadastrarEndereco);
routes.put("/endereco/:id", EnderecoController.atualizarEndereco);
routes.delete("/endereco/:id", EnderecoController.deletarEndereço);

export default routes;