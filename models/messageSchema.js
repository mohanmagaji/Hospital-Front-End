import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must containe atleast 3 charecter"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name must containe atleast 3 charecter"]
    },
    email:{
        type:String,
        required:true,
       validate:[validator.isEmail,"please enter a valid email"]
    },
    phone:{
        type:String,
        required:true,
        maxLength:[10,"Phone number must containe  10 charecter"]
      
    },
    message:{
        type:String,
        required:true,
    },

});

export const Message = mongoose.model("Message",messageSchema);