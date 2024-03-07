
const express           = require("express");
const cors              = require("cors")
const areaRouter        = require("./routes/area.routes.js")
const asignaturasRoutes = require("./routes/asignaturas.routes.js")
const estudianteRouter  = require("./routes/estudiante.routes.js")
const funcionarioRouter = require("./routes/funcionario.routes.js")
const loginRouter       = require("./routes/login.routes.js")
const registerRouter    = require("./routes/register.routes.js")
require("dotenv").config()

const app = express()
app.use(cors());
app.use(express.json());
const puerto = process.env.PORT || 3000


/**
 * aqui invocamos las rutas
 * 
 *
 */

app.use(areaRouter);
app.use(asignaturasRoutes);
app.use(estudianteRouter)
app.use(funcionarioRouter)
app.use(loginRouter)
app.use(registerRouter)

app.listen(puerto,  ()=> {
    console.log(`servidor escucahdo en el puerto ${puerto}`)
})