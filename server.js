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
});

server.post('/:name', (req, res) => {
    try {
        () => nodemailer.createTransport({
            host: req.body.host,
            port: req.bodyport,
            auth: {
                user: req.body.auth.user,
                pass: req.body.auth.pass
            }
        }).sendMail({
            to: req.body.user,
            text: req.body.text
        });

        res.json({ sender: req.params.name, to: req.body.user, text: req.body.text });
    } catch (error) {
        console.log(error);
    } 
});

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