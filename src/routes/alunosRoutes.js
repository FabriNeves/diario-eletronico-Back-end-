import express from "express";
import alunosController from "../controllers/alunosController.js";

const AlunosRouter = express.Router();

AlunosRouter.post("/cadastroAlunos", (req, res) => {
    alunosController.create(req, res);
});

AlunosRouter.get("/cadastroAlunos", (req, res) => {
    alunosController.read(req, res);
});

AlunosRouter.put("/cadastroAlunos/:id", (req, res) => {
    alunosController.update(req, res);
});

AlunosRouter.delete("/cadastroAlunos/:id", (req, res) => {
    alunosController.delete(req, res);
});

AlunosRouter.get("/cadastroAlunos/:id", (req, res) => {
    alunosController.readById(req, res);
});

export default AlunosRouter;
