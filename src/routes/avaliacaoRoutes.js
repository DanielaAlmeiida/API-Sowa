import express from "express";
import AvaliacaoController from "../controllers/avaliacaoController.js";

const routes = express.Router();

routes.get("/avaliacoes", AvaliacaoController.listarAvaliacao);
routes.post("/avaliacao", AvaliacaoController.cadastrarAvaliacao);
routes.put("/avaliacao/:id", AvaliacaoController.atualizarAvaliacao);
routes.delete("/avaliacao/:id", AvaliacaoController.deletarAvaliacao);

export default routes;