import express from "express";
import usuarios from "./usuariosRoutes.js"
import enderecos from "./enderecosRoutes.js"
import avaliacoes from "./avaliacaoRoutes.js"
import notificacoes from "./notificacaoRoutes.js"
import matches from "./matchRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API de dados node.js"))

    app.use(express.json(), usuarios, enderecos, avaliacoes, notificacoes, matches);
};

export default routes;
