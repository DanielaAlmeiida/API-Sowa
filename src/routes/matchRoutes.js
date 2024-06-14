import express from "express";
import matchController from "../controllers/matchController.js";

const routes = express.Router();

routes.get("/matches", matchController.listarMatches);
routes.post("/match", matchController.cadastrarMatch);
routes.delete("/match/:id", matchController.deletarMatch);

export default routes;