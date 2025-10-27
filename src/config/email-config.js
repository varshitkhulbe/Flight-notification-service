const nodeMailer = require('nodemailer');
const {GMAIL_EMAIL,GMAIL_PASS}=require('./server-config');

const mailsender=nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service:'gmail',
    auth:{
        user:GMAIL_EMAIL.trim(),
        pass:GMAIL_PASS.trim()         
    }
})

module.exports={mailsender}; 