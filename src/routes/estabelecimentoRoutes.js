import express from "express";
import estabelecimentoController from "../controllers/estabController.js";

const estabelecimentoRouter = express.Router();
const nomeRota = "cadastroEstab";

estabelecimentoRouter.route(`/${nomeRota}`)
  .get(estabelecimentoController.read)
  .post(estabelecimentoController.create);


estabelecimentoRouter.route(`/${nomeRota}/:id`)
  .get(estabelecimentoController.readById)
  .put(estabelecimentoController.update)
  .delete(estabelecimentoController.delete);

export default estabelecimentoRouter;
