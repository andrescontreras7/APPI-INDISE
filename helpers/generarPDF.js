const jsreport = require('jsreport')({


httpPort: 3002 // Cambia el puerto a uno que no esté en uso
});
const fs = require('fs');


async function generarPDF(datos) {
try {
  await jsreport.init();

  const reporte = await jsreport.render({
    template: {
      content: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <style>
            /* Estilos generales */
            body {
              font-family: "Roboto", Arial, sans-serif;
              margin: 10;
              padding: 0;
              background-color: #f7f7f7;

            }
            .container {
              max-width: 800px;
              padding: 10px;
              background-color: #fff;
            }
            nav {
              display: flex;
              justify-content:left;
              margin:auto;
              align-items: center;
              border-bottom: 1px solid #ccc;
              margin-bottom: 20px;
            }
            .logo {
              width: 100px;
              height: auto;
            }
            .title {
              text-align: center;
              margin-bottom: 1px;
              color:#42464A;
              font-size: 16px;
             
        
      
              
            }
            /* Estilos de la tabla */
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            
            }
            th, td {
              border: 1px solid darkgray;
              padding: 12px;
              text-align: left;
              font-bold: bold;
            }
            td{
              color: #696969;
            }
            th {
              background-color:#b0c4de;
              text-transform: uppercase;
              font-weight:ligther;
              font-size: 12px;
              
            }
            /* Estilos adicionales */
            .subtitle {
              text-align: center;
              margin-bottom: 20px;
              color: #43474B;
              font-size: 18px;
              font-family: 'Roboto'
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #999;
              font-size: 14px;
            }
            .te {
              display: flex;
              margin-left: 170px;
              flex-direction: column;
             
           
            }
            .title2{
              text-align: center;
              margin-bottom: 20px;
              color:#5892E3;
              font-size: 20px;
            }
            h1{
              font-bold: 100px;
            }

           
            .name{
              color: #0066cc;
              font-size: 16px;
              font-weight: bold;
              
              margin-bottom: 110px;
             
            }
           
          </style>
          </head>

        <nav>
        <img src="https://iedsangabriel.com/assets/img/logo.png" class="logo">
          <div class="te">
          
            <h1 class="title">COLEGIO DISTRITAL SAN GABRIEL </h1>
            <h1 class="title">LIC.Funcionamiento:Resolucion</h1>
            <h1 class="title">Dane. Nit:</h4>
           
          </div>
    

         </nav>
          <body>
            <div class="container">
              <!-- Logotipo -->
          
              <!-- Título -->
              <h4 class="title2">REPORTE MENSUAL ASISTENCIAS</h4>
             
             


           

              <!-- Tabla de asistencias -->
              <table>
                <thead>
                <td style=" background-color:#b0c4de; font-size:14px; color:black">${datos[0].estudiante.estudnombre} ${datos[0].estudiante.estudapellido}</td>
                  <tr>
                 
                    <th>Codigo</th>
                    <th>Fecha Asistencia</th>
                    <th>Detalle asistencia</th>
                    <th>nombre del grado</th>
                  </tr>
                </thead>
              
                
                <tbody>
                <tr>
                  ${datos.map(dato => `
                    
                      <td>${dato.cod_asi}</td>
                    
                      <td>${dato.fec_asi}</td>
                      <td>${dato.det_asi}</td>
                      <td>${dato.grupo.grupgrado}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>

              <!-- Pie de página -->
             
              <p class="footer">Fecha de generacion de informe: ${new Date().toLocaleDateString()}</p>
              <p class="footer">Informe generado del mes ${datos[0].mes} </p>
            </div>
          </body>
        </html>
      `,
      engine: 'handlebars',
      recipe: 'chrome-pdf',
      chrome: {
        landscape: false,
        displayHeaderFooter: false
      }
    }
  });

  const pdfStream = fs.createWriteStream('reporte_asistencias.pdf');
  reporte.stream.pipe(pdfStream);

  console.log('Informe generado exitosamente');
} catch (error) {
  console.error('Error al generar el informe:', error);
} finally {
  await jsreport.close();
}
}

module.exports = generarPDF;
