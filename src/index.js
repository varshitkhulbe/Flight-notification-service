const express = require('express');
const {mailsender}= require('./config/email-config')
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try{
    const response=await mailsender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to:'abc@gmail.com',
        subject:'Test Email from Notification Service',
        text:'This is a test email sent from the notification service to verify email functionality.'
    });
    console.log('Email sent successfully:', response);
} catch(error)
{
    console.error('Error sending email:', error);
}
});
