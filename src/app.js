import sequelize from './config/configMySQL.js';


import express from "express";
import alunosController  from "./controllers/alunosController.js"
const identificador = "aluno";

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

const app = express();
app.use(express.json())


app.get(`/${identificador}Read`, alunosController.read);
app.get(`/${identificador}Read/:id`, alunosController.readById);
app.post(`/${identificador}Create`, alunosController.create);
app.put(`/${identificador}Update/:id`, alunosController.update);
app.delete(`/${identificador}Delete/:id`, alunosController.delete);


export default app;
// -->server.js



