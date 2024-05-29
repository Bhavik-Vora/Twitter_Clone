import express from "express";
import dotenv from "dotenv";
import initialDbConnection from "./config/database.js";
import cookieParser from 'cookie-parser';
import userRoute from "./route/userRoute.js";
import tweetRoute from "./route/tweetRoute.js";
import cors from "cors";
dotenv.config({
    path: ".env"
});

const app = express();
const port = 8080; 

initialDbConnection();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin:"http://localhost:5173",
  credentials:true,
}
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Define the /home route correctly
app.get("/", (req, res) => {
    res.status(200).json({
      message: "saying hii from app.js",
    });
  });


  app.get("/home", (req, res) => {  // Corrected the route definition
    res.status(200).json({
        message: "I am listening",
    });
});
// Start the server with the port number
// app.listen(port,() => {
//     console.log(`Server is listening on port 8080`);
// });

app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});

