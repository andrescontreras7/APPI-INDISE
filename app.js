const express           = require("express");
const cors              = require("cors")
const areaRouter        = require("./routes/area.routes.js")
const asignaturasRoutes = require("./routes/asignaturas.routes.js")
const estudianteRouter  = require("./routes/estudiante.routes.js")
const funcionarioRouter = require("./routes/funcionario.routes.js")
const loginRouter       = require("./routes/login.routes.js")
const asistenciaRouter  = require("./routes/asistencias_estudiante.routes.js")
const grupoRouter       = require("./routes/grupo.routes.js")
const reporteRouter     = require("./routes/reportes.routes.js")
const acudienteRouter   = require("./routes/acudientes.routes.js")
const horasRouter       = require("./routes/horasLaboradas.routes.js")
const cookieParser      = require('cookie-parser');
const observadorRouter  = require("./routes/observador.routes.js");
const EvaluacionesRouter= require("./routes/evaluaciones.routes.js");
const  EstudianteAcudienteRouter  = require("./routes/estudiante_acudiente.routes.js");
const grupo_estudiante  = require("./routes/grupo_estudiantes.routes.js");
const periodosRoutes    = require("./routes/periodos.routes.js")
const gradosRoutes      = require("./routes/grado.routes.js")

require("dotenv").config()

const app = express()
app.use(cookieParser());
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
app.use( asistenciaRouter);
app.use(grupoRouter)
app.use(reporteRouter)
app.use(acudienteRouter)
app.use(horasRouter)
app.use(observadorRouter)
app.use(EvaluacionesRouter)
app.use(EstudianteAcudienteRouter)
app.use(grupo_estudiante)
app.use(periodosRoutes)
app.use(gradosRoutes)



app.listen(puerto,  ()=> {
    console.log(`servidor escucahdo en el puerto ${puerto}`)
})

