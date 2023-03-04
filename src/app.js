import sequelize from './config/configMySQL.js';


import express from "express";
import alunosController  from "./controllers/alunosController.js";
import  estabController from "./controllers/estabController.js";
const identificador = "aluno";

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

const app = express();
app.use(express.json())


// Rotas alunos 
app.get(`/${identificador}Read`, alunosController.read);
app.get(`/${identificador}Read/:id`, alunosController.readById);
app.post(`/${identificador}Create`, alunosController.create);
app.put(`/${identificador}Update/:id`, alunosController.update);
app.delete(`/${identificador}Delete/:id`, alunosController.delete);


//Rotas estabelecimento
app.get(`/${identificador}Read`, estabController.read);
app.get(`/${identificador}Read/:id`, estabController.readById);
app.post(`/${identificador}Create`, estabController.create);
app.put(`/${identificador}Update/:id`, estabController.update);
app.delete(`/${identificador}Delete/:id`, estabController.delete);


export default app;
// -->server.js



