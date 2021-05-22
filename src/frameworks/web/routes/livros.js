const express = require("express");
const LivrosController = require("../../../controllers/livros/LivrosController");

const livrosRouter = (dependencies) => {
  const router = express.Router();

  const controller = LivrosController(dependencies);

  router.route("/").get(controller.getAllLivros).post(controller.addLivro);
  router.route("/:livroId").get(controller.getLivro);

  return router;
};

module.exports = livrosRouter;