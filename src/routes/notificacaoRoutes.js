import express from "express";
import NotificacaoController from "../controllers/notificacaoController.js";

const routes = express.Router();

routes.get("/notificacoes", NotificacaoController.listarNotificacao);
routes.post("/notificacao", NotificacaoController.cadastrarNotificacao);
routes.put("/notificacao/:id", NotificacaoController.atualizarNotificacao);
routes.delete("/notificacao/:id", NotificacaoController.deletarNotificacao);

export default routes;