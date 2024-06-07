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
const periodosRoutes    = require("./routes/periodos.routes.js")
const gradosRoutes      = require("./routes/grado.routes.js");
const rol = require("./routes/rol.routes.js");
const RouterExcusa = require("./routes/excusas.routes.js");
const AsigDocRouter = require("./routes/asigDoc.routes.js");
const enviosRouter = require("./routes/envios_tareas.routes.js");
const asigEstudiantes = require("./routes/asigna_est.routes.js");
const clasesRouter = require("./routes/clases.routes.js");

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

app.use(periodosRoutes)
app.use(gradosRoutes)
app.use(rol)
app.use(RouterExcusa)
app.use(AsigDocRouter)
app.use(enviosRouter)
app.use(asigEstudiantes)
app.use(clasesRouter)

app.listen(puerto,  ()=> {
    console.log(`servidor escucahdo en el puerto ${puerto}`)
})

