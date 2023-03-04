import Sequelize from "sequelize";

const sequelize = new Sequelize("cadastroAlunos", "root", "meusql", {
  host: "localhost",
  dialect: "mysql",
});


export default sequelize;

// -> schema.js