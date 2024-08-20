import { createPool } from "mysql2";
import 'dotenv/config.js'
import { config } from "dotenv";

config()
const connnection = createPool({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pwDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 5
})

connection.on('connect', (err) => {
    if (err) throw new Error('The database did not respond due to a connection error, please try again later' )
    })

    export {
        connection
    }