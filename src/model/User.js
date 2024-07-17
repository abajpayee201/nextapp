const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "please provide a name"]
    },
    email:{
        type:String,
        required: [true, "please provide  email"],
        unique : true,
        
    },
    mobile:{
        type:Number,
        required: [true, "please provide a mobile no."],
        unique : true,
        
    },
    city:{
        type:String,
        required: [true, "please provide a city"]
    },
    pincode:{
        type:String,
        required: [true, "please provide a pincode"]
    }
},{timestamps:true})

mongoose.models ={}
export default mongoose.model("User",UserSchema)