import mongoose, { Schema } from "mongoose";

export {gamesModel}

const gamesSchema = new Schema({

    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: false
    },
    nota: {
        type: Number,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    image_path: {
        type: String,
        require: true
    }

}, {timestamps: true})

const gamesModel = mongoose.model("Games", gamesSchema)