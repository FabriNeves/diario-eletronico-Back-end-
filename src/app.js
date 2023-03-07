import sequelize from './config/configMySQL.js';


import express from "express";
import AlunosRouter from './routes/alunosRoutes.js';
import estabelecimentoRouter from './routes/estabelecimentoRoutes.js';


sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

const app = express();
app.use(express.json())

app.use(AlunosRouter);
app.use(estabelecimentoRouter);
// router(app);

// Rotas alunos 
// let identificador = "aluno";
// app.get(`/${identificador}Read`, alunosController.read);
// app.get(`/${identificador}Read/:id`, alunosController.readById);
// app.post(`/${identificador}Create`, alunosController.create);
// app.put(`/${identificador}Update/:id`, alunosController.update);
// app.delete(`/${identificador}Delete/:id`, alunosController.delete);


//Rotas estabelecimento
// identificador = "estab";
// app.get(`/${identificador}Read`, estabelecimentoController.read);
// app.get(`/${identificador}Read/:id`, estabelecimentoController.readById);
// app.post(`/${identificador}Create`, estabelecimentoController.create);
// app.put(`/${identificador}Update/:id`, estabelecimentoController.update);
// app.delete(`/${identificador}Delete/:id`, estabelecimentoController.delete);


export default app;
// -->server.js



