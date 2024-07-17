const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required: [true,"please provide email id"],
        unique : true,
        
    },
  
},{timestamps:true})

mongoose.models ={}
export default mongoose.model("Newsletter",NewsletterSchema)