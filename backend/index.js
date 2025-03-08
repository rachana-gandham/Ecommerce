const express=require("express")
const app=express()
const cors =require("cors")
require("dotenv").config()
const port =process.env.PORT 
const connectDB =require("./config/db")
const authRoutes =require("./routes/auth")
const adminRoutes=require("./routes/adminAuth")
const productRoutes= require("./routes/productRoutes")
const cartRoutes=require("./routes/cartRoutes")
const paymentRoutes=require("./routes/paymentRoutes")
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
connectDB()
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/payment",paymentRoutes)

app.listen(port,()=>console.log("Server is running on port:",port))

// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/auth");
// const adminRoutes = require("./routes/adminAuth");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// // ✅ Allow frontend requests with credentials
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Your frontend URL
//     credentials: true, // Allow sending cookies or auth headers
//   })
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// connectDB();

// // ✅ Ensure all routes are correctly set up
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);

// app.listen(port, () => console.log("Server is running on port:", port));
