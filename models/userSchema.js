import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must containe atleast 3 charecter"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must containe atleast 3 charecter"]
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
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain atleast 8 characters"],
        select: false,

    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient","Doctor"],

    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },

});
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.jwt_Secret_key, {
        expiresIn: process.env.jwt_expires,
    });
};

export const User = mongoose.model("User", userSchema);