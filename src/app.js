import express from "express";
import conectaNaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await conectaNaDB();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(cors());
routes(app);

export default app;
