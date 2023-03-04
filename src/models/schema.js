import { Sequelize } from "sequelize";
import sequelize from "../config/configMySQL.js";

// Esquema alunos
 export const Aluno = sequelize.define('Alunos', {
  nome: Sequelize.STRING,
  genero: Sequelize.STRING,
  dataDeNascimento: Sequelize.DATE,
  idade: Sequelize.INTEGER,
  disciplina: Sequelize.STRING,
  nota: Sequelize.FLOAT,
  situacaoFinal: Sequelize.STRING,
});


// Esquema Estabelecimento 
 export const Estabelecimento = sequelize.define("Estabelecimento", {
  nomeEstabelecimento: Sequelize.STRING,
  turno: Sequelize.STRING,
  endereço: Sequelize.STRING,
  area: Sequelize.STRING,
  ano: Sequelize.INTEGER,
})

// -> exporta esquemas 


















