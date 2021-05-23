const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./frameworks/web/routes");
const DependenciasProjeto = require("./config/DependenciasProjeto");

const app = express();
const port = process.env.PORT || 3000;

DependenciasProjeto.ServicoBancoDeDados.initDatabase().then(
  () => {
    //Configuração para acessar corpo das requisições
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //API
    app.use("/api", routes(DependenciasProjeto));

    app.listen(port, () => console.log(`http://localhost:${port}`));
  },
  (err) => {
    console.log("O Banco de Dados não está pronto, erro:", err);
  }
);
