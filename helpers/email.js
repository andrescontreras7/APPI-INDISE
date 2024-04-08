const nodemailer =  require('nodemailer')




const  EmailRegistro  = async  (datos) => {
  console.log(datos)

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });

      const  {email , nombre, token} = datos

      await transport.sendMail({
        from: 'coco.com',
        to: email,
        subject: 'confirma tu cuenta',
        text: 'confirma tu cuenta',
        html: `
        <h1>Bienvenido a indise</h1>
        <p>Hola ${nombre} hemos recibido tu solicitud de registro para indise</p>
        <p> este es el codigo de verificacion  ${token} <p/>
       
        <a href="${process.env.BACKEND_URL}:3001/appi/validate/cuenta/${token}">Confirmar cuenta</a>


        `


      })


}

module.exports = EmailRegistro