import {Request, Response} from "express"
import {connection} from "../conexao/conexao"
import { gamesModel } from "../schemas/games"
import games from "../entities/gamesEntitie"

export default {

   async index(req:Request, res: Response) {
        const newGame:games = {
            nome: req.body.nome,
            genero: req.body.genero,
            image_path: req.body.image_path,
            nota: req.body.nota,
            descricao: req.body.descricao
        }
        
        await gamesModel.create(newGame).then(result => console.log(result))
    },

    async search(req: Request, res:Response) {
        await gamesModel.find().then(result => {
            console.log(result)
            res.send(result)
        })
    },

    async deleteGames(req: Request, res:Response) {
        await gamesModel.deleteMany().then(result => console.log("Games Deletados!"))
    },

    deleteGameEspecific(res:Response) {
        gamesModel.deleteOne({nome: "Marvel's Spider Man Remastered"}).then(result => console.log(result))
    }
}