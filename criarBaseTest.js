import sequelize from "./src/config/configMySQL.js"
import { Estabelecimento,Aluno } from "./src/models/schema.js";


sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

// sequelize.drop()
//   .then(() => console.log('Todas as tabelas foram removidas com sucesso!'))
//   .catch((error) => console.log(`Erro ao remover as tabelas: ${error}`));


await sequelize.sync({ force: true });



const escolaA = await Estabelecimento.create({
  nomeEstabelecimento: "Escola Municipal Francisco Xavier",
  turno: "Manhã",
  endereco: "Rua Maranhão, 100, São Paulo - SP",
  area: "Urbana",
  ano: "2023"
  });
  
  const escolaB = await Estabelecimento.create({
  nomeEstabelecimento: "Colégio São José",
  turno: "Integral",
  endereco: "Avenida das Flores, 500, Belo Horizonte - MG",
  area: "Urbana",
  ano: "2023"
  });
  
  const escolaC = await Estabelecimento.create({
  nomeEstabelecimento: "Escola Estadual José de Alencar",
  turno: "Tarde",
  endereco: "Rua Paraná, 1000, Curitiba - PR",
  area: "Urbana",
  ano: "2023"
  });
  
  const escolaD = await Estabelecimento.create({
  nomeEstabelecimento: "Colégio Santa Maria",
  turno: "Manhã",
  endereco: "Rua dos Girassóis, 200, Rio de Janeiro - RJ",
  area: "Urbana",
  ano: "2023"
  });
  
  const escolaE = await Estabelecimento.create({
  nomeEstabelecimento: "Escola Municipal Monteiro Lobato",
  turno: "Manhã",
  endereco: "Rua das Margaridas, 300, São Paulo - SP",
  area: "Urbana",
  ano: "2023"
  });
  
  const ana2 = await Aluno.create({
  nome: "Ana Silva",
  genero: "Feminino",
  dataDeNascimento: "2008-05-10",
  idade: 14,
  disciplina: "Matemática",
  nota: 8.5,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaA.id
  });
  
  const pedro = await Aluno.create({
  nome: "Pedro Santos",
  genero: "Masculino",
  dataDeNascimento: "2005-07-18",
  idade: 16,
  disciplina: "História",
  nota: 7.5,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaA.id
  });
  
  const maria = await Aluno.create({
  nome: "Maria Oliveira",
  genero: "Feminino",
  dataDeNascimento: "2007-11-28",
  idade: 14,
  disciplina: "Geografia",
  nota: 9.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaC.id
  });
  
  const joao = await Aluno.create({
  nome: "João Silva",
  genero: "Masculino",
  dataDeNascimento: "2006-02-15",
  idade: 16,
  disciplina: "Química",
  nota: 8.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaD.id
  });

  
const joana = await Aluno.create({
  nome: "Joana Oliveira",
  genero: "Feminino",
  dataDeNascimento: "2007-11-28",
  idade: 14,
  disciplina: "Geografia",
  nota: 9.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaB.id
});

const lucas = await Aluno.create({
  nome: "Lucas Silva",
  genero: "Masculino",
  dataDeNascimento: "2006-02-15",
  idade: 16,
  disciplina: "Química",
  nota: 8.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaB.id
});

const julia = await Aluno.create({
  nome: "Julia Oliveira",
  genero: "Feminino",
  dataDeNascimento: "2007-11-28",
  idade: 14,
  disciplina: "Geografia",
  nota: 9.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaE.id
});

const guilherme = await Aluno.create({
  nome: "Guilherme Silva",
  genero: "Masculino",
  dataDeNascimento: "2006-02-15",
  idade: 16,
  disciplina: "Química",
  nota: 8.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaE.id
});


const maria2 = await Aluno.create({
  nome: "Maria Santos",
  genero: "Feminino",
  dataDeNascimento: "2005-05-01",
  idade: 17,
  disciplina: "Matemática",
  nota: 9.5,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaA.id
  });
  
  const joao2 = await Aluno.create({
  nome: "João Silva",
  genero: "Masculino",
  dataDeNascimento: "2004-09-10",
  idade: 18,
  disciplina: "Física",
  nota: 7.0,
  situacaoFinal: "Reprovado",
  idEstabelecimento: escolaB.id
  });
  
  const ana = await Aluno.create({
  nome: "Ana Castro",
  genero: "Feminino",
  dataDeNascimento: "2003-12-25",
  idade: 19,
  disciplina: "História",
  nota: 6.5,
  situacaoFinal: "Reprovado",
  idEstabelecimento: escolaC.id
  });
  
  const felipe = await Aluno.create({
  nome: "Felipe Santos",
  genero: "Masculino",
  dataDeNascimento: "2005-06-12",
  idade: 16,
  disciplina: "Biologia",
  nota: 8.5,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaD.id
  });
  
  const carla = await Aluno.create({
  nome: "Carla Souza",
  genero: "Feminino",
  dataDeNascimento: "2004-02-28",
  idade: 18,
  disciplina: "Geografia",
  nota: 7.0,
  situacaoFinal: "Reprovado",
  idEstabelecimento: escolaE.id
  });
  
  const pedro2 = await Aluno.create({
  nome: "Pedro Costa",
  genero: "Masculino",
  dataDeNascimento: "2003-03-15",
  idade: 19,
  disciplina: "Português",
  nota: 6.0,
  situacaoFinal: "Reprovado",
  idEstabelecimento: escolaA.id
  });
  
  const luana = await Aluno.create({
  nome: "Luana Oliveira",
  genero: "Feminino",
  dataDeNascimento: "2005-11-22",
  idade: 16,
  disciplina: "Inglês",
  nota: 8.0,
  situacaoFinal: "Aprovado",
  idEstabelecimento: escolaB.id
  });
  
  const lucas2 = await Aluno.create({
  nome: "Lucas Santos",
  genero: "Masculino",
  dataDeNascimento: "2004-04-30",
  idade: 18,
  disciplina: "Química",
  nota: 7.5,
  situacaoFinal: "Reprovado",
  idEstabelecimento: escolaC.id
  });

// Aluno.create({
//   nome: "Luiza Souza",
//   genero: "Feminino",
//   dataDeNascimento: "2009-09-02",
//   idade: 12,
//   disciplina: "Português",
//   nota: 9.5,
//   situacaoFinal: "Aprovado",
//   nomeEstabelecimento:"Escola Municipal Monteiro Lobato"
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
