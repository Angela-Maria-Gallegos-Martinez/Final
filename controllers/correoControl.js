const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const enviaCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "angy23gm@gmail.com",
            pass: "qipjabtznohcxibj"
        }
    });

    const opciones = {
        from: body.email,
        to: 'angy23gm@gmail.com',
        subject: body.asunto,
        text: body.mensaje
    };

    config.sendMail(opciones, function (error, result) {
        if (error) return resp.json({ ok: false, msg: error });

        return resp.json({
            ok: true,
            msg: result
        });
    })
}

module.exports = {
    enviaCorreo
}