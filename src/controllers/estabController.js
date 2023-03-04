import { Estabelecimento } from '../models/schema.js';

class estabelecimentoController {
    static async read(req, res) {
        try {
            const alunos = await Estabelecimento.findAll();
            res.json(alunos);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async readById(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Estabelecimento.findOne({ where: { id } });
            if (aluno) {
                res.json(aluno);
            } else {
                res.status(404).send('Estabelecimento não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async create(req, res) {
        const novoEstabelecimento = req.body;
        try {
            const aluno = await Estabelecimento.create(novoEstabelecimento);
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
            const aluno = await Estabelecimento.findOne({ where: { id } });
            if (aluno) {
                if(atualizacoes){
                    await aluno.update(atualizacoes);
                    res.json(aluno);
                }else{
                    res.status(406).send("Atualização vazia.");
                }                
                
            } else {
                res.status(404).send('Estabelecimento não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Estabelecimento.findOne({ where: { id } });
            if (aluno) {
                await aluno.destroy();
                res.send('Estabelecimento deletado. :' + JSON.stringify(aluno));
            } else {
                res.status(404).send('Estabelecimento não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default estabController;
// -routes