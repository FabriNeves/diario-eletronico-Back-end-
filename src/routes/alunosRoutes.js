import express from "express";
import alunosController from "../controllers/alunosController.js";

const AlunosRouter = express.Router();

const nomeRota = "cadastroAlunos";

AlunosRouter.route(`/${nomeRota}`)
  .post(alunosController.create)
  .get(alunosController.read);
  
AlunosRouter.route(`/${nomeRota}/busca`)
  .get(alunosController.find);

AlunosRouter.route(`/${nomeRota}/:id`)
  .put(alunosController.update)
  .delete(alunosController.delete)
  .get(alunosController.readById);

export default AlunosRouter;
