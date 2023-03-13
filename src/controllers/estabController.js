import { Estabelecimento } from '../models/schema.js';

class estabelecimentoController {
    static async read(req, res) {
        try {
            const estabelecimentos = await Estabelecimento.findAll();
            res.json(estabelecimentos);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async readById(req, res) {
        const { id } = req.params;
        try {
            const estabelecimento = await Estabelecimento.findOne({ where: { id } });
            if (estabelecimento) {
                res.json(estabelecimento);
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
            const estabelecimento = await Estabelecimento.create(novoEstabelecimento);
            res.json(estabelecimento);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const atualizacoes = req.body;
        console.log(atualizacoes);
        try {
            const estabelecimento = await Estabelecimento.findOne({ where: { id } });
            if (estabelecimento) {
                if(atualizacoes){
                    await estabelecimento.update(atualizacoes);
                    res.json(estabelecimento);
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
            const estabelecimento = await Estabelecimento.findOne({ where: { id } });
            if (estabelecimento) {
                await estabelecimento.destroy();
                res.send('Estabelecimento deletado. :' + JSON.stringify(estabelecimento));
            } else {
                res.status(404).send('Estabelecimento não encontrado.');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default estabelecimentoController;
// -routes