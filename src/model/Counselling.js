const mongoose = require('mongoose');

const CounsellingSchema = new mongoose.Schema({
   
    mobile:{
        type:Number,
        required: [true,"please provide a mobile no"],
        unique : true,
        
    },
  
},{timestamps:true})

mongoose.models ={}
export default mongoose.model("Counselling",CounsellingSchema)