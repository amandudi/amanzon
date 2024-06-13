const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Connection successful")
    } catch (err) {
        console.log(err)
    }
}
connectDB();