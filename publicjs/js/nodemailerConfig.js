const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

function enviarCorreoElectronico(to, subject, html) {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Error al enviar el correo: ', error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });
}

module.exports = { enviarCorreoElectronico };
