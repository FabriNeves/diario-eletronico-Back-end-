import express from "express";
import alunosController from "../controllers/alunosController.js";

const router = express.Router();

router.post("/cadastroAlunos", (req, res) => {
    alunosController.create(req, res);
});

router.get("/cadastroAlunos", (req, res) => {
    alunosController.read(req, res);
});

router.put("/cadastroAlunos/:id", (req, res) => {
    alunosController.update(req, res);
});

router.delete("/cadastroAlunos/:id", (req, res) => {
    alunosController.delete(req, res);
});

router.get("/cadastroAlunos/:id", (req, res) => {
    alunosController.readById(req, res);
});

export default router;
