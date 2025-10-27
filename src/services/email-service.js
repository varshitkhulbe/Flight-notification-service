const {TicketRepository}= require("../repositories")
const {MAILER}= require("../config")
const ticketrepository= new TicketRepository();
async function sendEmail(mailFrom,mailTo,subject,text){
    try{
        const response= await MAILER.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:subject,
            text:text
        })
        return response;
    }catch(error)
    {
        console.log("Something went wrong in the email service layer",error);
        throw error;
    }
}
async function createTicket(data)
{
    try {
        const response=await ticketrepository.create(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in the email service layer",error);
        throw error;
    }
}
async function getPendingEmails()
{
    try {
        const response= await ticketrepository.getPendingTickets();
        return response;
    } catch (error) {
        console.log("Something went wrong in the email service layer",error);
        throw error;
    }
}
module.exports={
 sendEmail,
 createTicket,
 getPendingEmails
}