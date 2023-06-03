"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = require("../conexao/conexao");
exports.default = {
    index(req, res) {
        conexao_1.connection.query('select * from games', (err, result) => {
            console.log(result);
            res.send(result);
        });
    }
};
