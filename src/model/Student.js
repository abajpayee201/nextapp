const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"],

    },
    email: {
        type: String,
        required: [true, "please provide a email"],
        unique : true,

    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        unique : true,

    },
    mobile: {
        type: Number,
        required: [true, "please provide a mobile no"],
        unique : true,

    },
    dob: {
        type: String,
        required: [true, "please provide a dob"],

    },
    pincode: {
        type: String,
        required: [true, "please provide a pincode"],

    },
    year: {
        type: String,
        required: [true, "please provide a year"],

    }
}, { timestamps: true })

mongoose.models = {}
export default mongoose.model("Student", StudentSchema)