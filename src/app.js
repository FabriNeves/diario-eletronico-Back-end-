//import sequelize from './config/configMySQL.js';
//import { Aluno, estabelecimento } from './models/schema.js';

import express from "express";
import alunosController  from "./controllers/alunosController.js"

// sequelize.authenticate().then(() => {
//     console.log("Conectado com sucesso!");
// }).catch((erro) => {
//     console.log("Falha ao se conectar:", erro);
// });

const app = express();
app.use(express.json())

app.get('/read', alunosController.read);
app.get('/read/:id', alunosController.readById);
app.post('/create', alunosController.create);
app.put('/update/:id', alunosController.update);
app.delete('/delete/:id', alunosController.delete);


export default app;
// -->server.js



















//estabelecimento.sync({force:true});
//Aluno.sync({force:true});


// Aluno.create({
//     nome: "Seu Bira",
//     genero: "Masculino",
//     dataDeNascimento: "1962-12-20",
//     idade: 61,
//     disciplina: "Historia",
//     nota: 5,
//     situacaoFinal: "Reprovado",
// });

// Aluno.create({
//     nome: "Albert Einstein",
//     genero: "Masculino",
//     dataDeNascimento: "1879-03-14",
//     idade: 143,
//     disciplina: "Física",
//     nota: 9.5,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Carl Sagan",
//     genero: "Masculino",
//     dataDeNascimento: "1934-11-09",
//     idade: 88,
//     disciplina: "Astronomia",
//     nota: 9,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Erwin Schrödinger",
//     genero: "Masculino",
//     dataDeNascimento: "1887-08-12",
//     idade: 135,
//     disciplina: "Física",
//     nota: 8.5,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Galileo Galilei",
//     genero: "Masculino",
//     dataDeNascimento: "1564-02-15",
//     idade: 459,
//     disciplina: "Física",
//     nota: 9,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Isaac Newton",
//     genero: "Masculino",
//     dataDeNascimento: "1643-01-04",
//     idade: 380,
//     disciplina: "Física",
//     nota: 10,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "James Clerk Maxwell",
//     genero: "Masculino",
//     dataDeNascimento: "1831-06-13",
//     idade: 191,
//     disciplina: "Física",
//     nota: 9,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Marie Curie",
//     genero: "Feminino",
//     dataDeNascimento: "1867-11-07",
//     idade: 155,
//     disciplina: "Física",
//     nota: 9.5,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Max Planck",
//     genero: "Masculino",
//     dataDeNascimento: "1858-04-23",
//     idade: 164,
//     disciplina: "Física",
//     nota: 9,
//     situacaoFinal: "Aprovado",
// });

// Aluno.create({
//     nome: "Michael Faraday",
//     genero: "Masculino",
//     dataDeNascimento: "1791-09-22",
//     idade: 231,
//     disciplina: "Física",
//     nota: 8,
//     situacaoFinal: "Reprovado",
// });

// Aluno.create({
//     nome: "Niels Bohr",
//     genero: "Masculino",
//     dataDeNascimento: "1885-10-07",
//     idade: 137,
//     disciplina: "Física",
//     nota: 9,
//     situacaoFinal: "Aprovado",
// });

