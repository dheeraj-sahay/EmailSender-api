const express = require('express');
const nodemailer = require('nodemailer');
const server = express();

server.use(express.json());

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "eliezer.sawayn95@ethereal.email",
        pass: "GDzVeAZFCtUW11Fkav"
    }
})

server.post('/', (req, res) => {
    try {
        transporter.sendMail({
            to: req.body.user,
            text: req.body.text
        })

        res.json({ to: req.body.user, text: req.body.text});
    }
    catch (err) { console.log(err); }
})


server.listen(3000, () => { console.log("Working Server!!!");});