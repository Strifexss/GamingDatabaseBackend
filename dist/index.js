"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./routes/router"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.get('/', (req, res) => {
    return res.send("Funcionou");
});
server.use(router_1.default);
server.listen(3001, () => console.log("Servidor Rodando"));
