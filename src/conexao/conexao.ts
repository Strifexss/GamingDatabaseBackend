import mysql from "mysql"
import mongoose, { mongo } from "mongoose"

export async function connection() {
    
    try {
    mongoose.set("strictQuery", true)
    
    await mongoose.connect("mongodb+srv://Strifexss:rocombole007@gamesdatabase.yw1igrw.mongodb.net/?retryWrites=true&w=majority")
    console.log("Mongo Funcionando")
    }
    catch(err) {
        console.log(err)
    }
}

/*export const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamingscore"
    
}) */