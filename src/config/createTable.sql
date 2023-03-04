CREATE TABLE alunos(
    nome VARCHAR(50),
    genero VARCHAR(10),
    dataDeNascimento DATE,
    idade INT,
    disciplina VARCHAR(20),
    nota INT,
    situacaoFinal VARCHAR(20)

);
 

 select * from alunos where idade>150; -- procurar alunos em sql
 delete from alunos where nome = "Albert Einstein"; -- deletar o Albert
 update alunos set nome ="Jurandir Filho", disciplina ="Física Quantica"  where nome = "Seu Bira";

 
insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Seu Bira",
    "Masculino",
    "1962-12-20",     
    61,
    "Historia",
    5,
    "Reprovado"
    );



insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Albert Einstein",
    "Masculino",
    "1879-03-14",     
    143,
    "Física",
    9.5,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Carl Sagan",
    "Masculino",
    "1934-11-09",     
    88,
    "Astronomia",
    9,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Erwin Schrödinger",
    "Masculino",
    "1887-08-12",     
    135,
    "Física",
    8.5,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Galileo Galilei",
    "Masculino",
    "1564-02-15",     
    459,
    "Física",
    9,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Isaac Newton",
    "Masculino",
    "1643-01-04",     
    380,
    "Física",
    10,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "James Clerk Maxwell",
    "Masculino",
    "1831-06-13",     
    191,
    "Física",
    9,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Marie Curie",
    "Feminino",
    "1867-11-07",     
    155,
    "Física",
    9.5,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Max Planck",
    "Masculino",
    "1858-04-23",     
    164,
    "Física",
    9,
    "Aprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Michael Faraday",
    "Masculino",
    "1791-09-22",     
    231,
    "Física",
    8,
    "Reprovado"
    );

insert into alunos(nome,genero,dataDeNascimento,idade,disciplina,nota,situacaoFinal) values(
    "Niels Bohr",
    "Masculino",
    "1885-10-07",     
    137,
    "Física",
    9,
    "Aprovado"
    );


Colocar no padrão : 

Alunos.create({
    nome: "Niels Bohr",
  genero: "Masculino",
  dataDeNascimento: "1885-10-07",
  idade: 137,
  disciplina: "Física",
  nota: 9,
  situacaoFinal: "Aprovado",
})