import sequelize from './config/configMySQL.js';
import express from "express";
import AlunosRouter from './routes/alunosRoutes.js';
import estabelecimentoRouter from './routes/estabelecimentoRoutes.js';
import cors from 'cors';


// Verifica conexão com o banco mysql
sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});


const app = express();
// add o middleware Json
app.use(express.json())
// Habilitar CORS
app.use(cors({
    origin: '*'
}));
// Add rotas 
app.use(AlunosRouter);
app.use(estabelecimentoRouter);

//http://exemplo.com/api/produtos?categoria=eletronicos&preco_maximo=1000

// app.get('/api/produtos', (req, res) => {
//     const categoria = req.query.categoria;
//     const precoMaximo = req.query.preco_maximo;
  
//     // faça algo com os parâmetros
  
//     res.send('Parâmetros recebidos: categoria = ' + categoria + ', preco_maximo = ' + precoMaximo);
//   });


export default app;
// -->server.js



