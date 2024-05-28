
// funcion para manerajr errores de los controladors

// Función para manejar errores de los controladores
const handleError = (res, message = "Error interno del servidor", code = 500) => {
    // Enviar la respuesta
    res.status(code).json({
      success: false,
      error: message
    });
  };
  

module.exports={handleError}