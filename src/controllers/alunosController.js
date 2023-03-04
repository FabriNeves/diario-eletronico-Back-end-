// Importar o esquema

class alunosController {
    static read(req, res) {
        res.send(`<h1>Método READ</h1>`);
    }

    static readById(req, res) {
        res.send(`<h1>Método READ-BY-ID</h1>`);
    }

    static create(req, res) {
        res.send(`<h1>Método CREATE</h1>`);
    }

    static update(req, res) {
        res.send(`<h1>Método UPDATE</h1>`);
    }

    static delete(req, res) {
        res.send(`<h1>Método DELETE</h1>`);
    }
}

export default alunosController;
//  = > crudRoutes.js