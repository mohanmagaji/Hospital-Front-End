import mongoose from "mongoose";
import validator from "validator";

const appointementSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must containe atleast 3 charecter"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1, "Last name must containe atleast 1 charecter"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    phone: {
        type: String,
        required: true,
        maxLength: [10, "Phone number must containe atleast 10 charecter"]

    },
    dob: {
        type: Date,
        required: [true, "DOB is required"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    appointment_date: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    doctor: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    hasVisited:{
        type: Boolean,
      default: false,
    },
   
    address:{
        type: String,
        required: [true,"Address is required!"],
    },
    status:{
        type: String,
       enum:["Pending","Rejected","Accepted"],
       default:"Pending",
    },
});
export const Appointment = mongoose.model("Appointment",appointementSchema);