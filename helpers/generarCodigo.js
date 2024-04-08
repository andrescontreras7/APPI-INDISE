const generarCodigo = () => {
    const longitud = 5;
    let codigo = '';
    
    for (let i = 0; i < longitud; i++) {
      const digito = Math.floor(Math.random() * 10);
      codigo += digito;
    }
    
    return codigo;
  }
  
  module.exports  = generarCodigo