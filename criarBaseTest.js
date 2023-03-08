import sequelize from "./src/config/configMySQL.js"
import { Estabelecimento,Aluno } from "./src/models/schema.js";


sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});


Estabelecimento.sync({force:true});
Aluno.sync({force:true});



Aluno.create({
    nome: "Albert Einstein",
    genero: "Masculino",
    dataDeNascimento: "1879-03-14",
    idade: 143,
    disciplina: "Física",
    nota: 9.5,
    situacaoFinal: "Aprovado",
});

// Estabelecimento.create({
//     nomeEstabelecimento:"Nome do Local",
//     turno : "Noite",
//     endereço: "Rua Setubal",
//     area : "Física",
//     ano:"2023"
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

// Estabelecimento.create({
//     nomeEstabelecimento:"Harvard University",
//     turno : "Integral",
//     endereço: "Cambridge, Massachusetts",
//     area : "Ciência Política",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"Stanford University",
//     turno : "Diurno",
//     endereço: "Stanford, California",
//     area : "Engenharia Elétrica",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"Massachusetts Institute of Technology (MIT)",
//     turno : "Noturno",
//     endereço: "Cambridge, Massachusetts",
//     area : "Ciência da Computação",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"California Institute of Technology (Caltech)",
//     turno : "Matutino",
//     endereço: "Pasadena, California",
//     area : "Física",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"University of Cambridge",
//     turno : "Integral",
//     endereço: "Cambridge, Inglaterra",
//     area : "História",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"University of Oxford",
//     turno : "Noturno",
//     endereço: "Oxford, Inglaterra",
//     area : "Literatura",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"University of Chicago",
//     turno : "Vespertino",
//     endereço: "Chicago, Illinois",
//     area : "Economia",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"ETH Zurich - Swiss Federal Institute of Technology",
//     turno : "Integral",
//     endereço: "Zurique, Suíça",
//     area : "Engenharia Mecânica",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"University of Pennsylvania",
//     turno : "Matutino",
//     endereço: "Filadélfia, Pennsylvania",
//     area : "Administração",
//     ano:"2023"
// });

// Estabelecimento.create({
//     nomeEstabelecimento:"University of California, Berkeley (UCB)",
//     turno : "Integral",
//     endereço: "Berkeley, California",
//     area : "Biologia",
//     ano:"2023"
// });
