import mongoose from "mongoose";

const foodItemModel = new mongoose.Schema({
  foodName: String,
  price: Number,
  imgPath: String,
  foodDesc: String,
  resto_id: mongoose.Schema.Types.ObjectId,
});

export const FoodItemSchema =
  mongoose.models.foods || mongoose.model("restaurents", foodItemModel);
