import express from "express";
import {Request, Response} from "express"
import cors from "cors"
import {connection} from "./conexao/conexao"
import mongoose, { Schema } from "mongoose";
import router from "./routes/router";

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (req: Request, res: Response) => {
    return res.send("Funcionou")
})

connection()

server.use(router)

server.listen(3001, () => console.log("Servidor Rodando"))