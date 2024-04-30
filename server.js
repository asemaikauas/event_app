const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


const server = express();
server.use(express.static(__dirname));
server.use(express.json());

server.get('/', (req, res) => {
    res.sendFile("./booking.html", { root: __dirname });
});

server.post("/api/booking", async (req, res) => {  
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',  
            port: 465,
            secure: true,  
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });        

        const { name, surname, age, tel, email } = req.body;  

        await transporter.sendMail({
            from: "kauasasemai05@gmail.com",
            to: "kauasasemai05@gmail.com",
            subject: "Заявка на бронь",
            text: `Поступила новая заявка на бронь места! Вот детали:\n1. Имя и Фамилия: ${name} ${surname}\n2. Возраст: ${age}\n3. Телефон номера: ${tel}\n4. Электронная почта: ${email}\n\nСвяжитесь как можно скорее!`,
            html: `
                <p>Поступила новая заявка на бронь места! Вот детали:</p>
                <ol>
                    <li>Имя и Фамилия: ${name} ${surname}</li>
                    <li>Возраст: ${age}</li>
                    <li>Телефон номера: ${tel}</li>
                    <li>Электронная почта: ${email}</li>
                </ol>
                <p>Свяжитесь как можно скорее!</p>
            `
        });
        
        return res.status(200).send({
            status: 200,
            message: "Успешная отправка"
        });

    } catch (e) {
        console.error(e);  // Log the error for better debugging
        return res.status(500).send({
            status: 500,
            message: 'Ошибка при запросе'
        });
    }
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});
