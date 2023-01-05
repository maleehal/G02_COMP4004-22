const { time } = require("console")
const mongoose = require("mongoose")
const {isEmail} = require("validator")

const bookingSchema = new mongoose.Schema({
    s_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service-provider"
    },
    c_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    status: {
        type: String,
        default:"Pending",
        enum:["Pending","Completed","Accepted","Rejected"]
    },
    date: {
        
        type: Date,
        default:Date.now,
        // required:[true,"this field is required"]
        
    },
    // Time: {
    //     type: Date,
    //     required:[true,"this field is required"]
    // }
})

const Booking = mongoose.model("booking",bookingSchema)

module.exports = Booking

