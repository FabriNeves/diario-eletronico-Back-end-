import express from "express";
import estabelecimentoController from "../controllers/estabController.js";

const estabelecimentoRouter = express.Router();
const nomeRota = "cadastroEstab";

estabelecimentoRouter.route(`/${nomeRota}`)
  .post(estabelecimentoController.create)
  .get(estabelecimentoController.read);

estabelecimentoRouter.route(`/${nomeRota}/:id`)
  .get(estabelecimentoController.readById)
  .put(estabelecimentoController.update)
  .delete(estabelecimentoController.delete);

export default estabelecimentoRouter;
