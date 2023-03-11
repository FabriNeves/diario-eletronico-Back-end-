import { Aluno } from '../models/schema.js';

class alunosController {
    static async read(req, res) {
        try {
            const alunos = await Aluno.findAll();
            res.json(alunos);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async find(req,res){
       
        const Escola = req.query.escola;
        const Nome = req.query.nome;
      
        // faça algo com os parâmetros
      
        res.send('Parâmetros recebidos: Escola = ' + Escola + ', Nome = ' + Nome);
        // try {
        //     const alunos = await Aluno.findAll();
        //     res.json(alunos);
        // } catch (error) {
        //     res.status(500).send(error);
        // }
        
    }

    static async readById(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findOne({ where: { id } });
            if (aluno) {
                res.json(aluno);
            } else {
                res.status(404).send('Aluno não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async create(req, res) {
        const novoAluno = req.body;
        console.log(req.body);
        try {
            const aluno = await Aluno.create(novoAluno);
            res.json(aluno);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const atualizacoes = req.body;
        console.log(atualizacoes);
        try {
            const aluno = await Aluno.findOne({ where: { id } });
            if (aluno) {
                if (atualizacoes) {
                    await aluno.update(atualizacoes);
                    res.json(aluno);
                } else {
                    res.status(406).send("Atualização vazia.");
                }

            } else {
                res.status(404).send('Aluno não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findOne({ where: { id } });
            if (aluno) {
                await aluno.destroy();
                res.send('Aluno deletado. :' + JSON.stringify(aluno));
            } else {
                res.status(404).send('Aluno não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default alunosController;
// -routes