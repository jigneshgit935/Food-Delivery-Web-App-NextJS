import mongoose from "mongoose";

const restaurentModel = new mongoose.Schema({
    restaurantName: String,
    email: String,
    password: String,
    confirmPassword: String,
    city: String,
    address: String,
    contact: String,
});

export const restaurentSchema = mongoose.models.restaurents || mongoose.model("restaurents", restaurentModel) 
