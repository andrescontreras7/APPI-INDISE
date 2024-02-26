const express = require("express");
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const puerto = process.env.PORT || 3000


/**
 * aqui invocamos las rutas
 * 
 *
 */


app.use("/appi" ,require ("./routes"))

app.listen(puerto,  ()=> {
    console.log(`servidor escucahdo en el puerto ${puerto}`)
})