import { Sequelize } from "sequelize";
import sequelize from "../config/configMySQL.js";

// Esquema alunos
 export const Aluno = sequelize.define('Alunos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: Sequelize.STRING,
  genero: Sequelize.STRING,
  dataDeNascimento: Sequelize.DATE,
  idade: Sequelize.INTEGER,
  disciplina: Sequelize.STRING,
  nota: Sequelize.FLOAT,
  situacaoFinal: Sequelize.STRING,
  nomeEstabelecimento: Sequelize.STRING
});


// Esquema Estabelecimento 
 export const Estabelecimento = sequelize.define("Estabelecimento", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomeEstabelecimento: Sequelize.STRING,
  turno: Sequelize.STRING,
  endereco: Sequelize.STRING,
  area: Sequelize.STRING,
  ano: Sequelize.INTEGER,
})

Estabelecimento.hasMany(Aluno);
Aluno.belongsTo(Estabelecimento);

// export const Nota = sequelize.define('Nota', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   materia: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   nota: {
//     type: Sequelize.FLOAT,
//     allowNull: false
//   },
//   periodo:{
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });


// Aluno.hasMany(Nota);
// Nota.belongsTo(Aluno);














