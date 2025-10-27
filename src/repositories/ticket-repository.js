const CrudRepository=require("./crud-repository")
const {Ticket}=require("../models")
console.log("Ticket model from models/index.js =>", Ticket);

class TicketRepository extends CrudRepository{
 constructor(){
    super(Ticket) //super keyword used to call the constructor of the parent class
 }
 async getPendingTickets()
 {
   const response= await Ticket.findAll({
      where:
      {
         status:"PENDING"
      }
   })
   return response;
 }
}

module.exports=TicketRepository;