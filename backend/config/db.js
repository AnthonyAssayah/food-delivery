import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anthonyassayah14:sSsDRBF0UDzHCZx6@cluster0.cqv8tum.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=> console.log("db connected"));
};