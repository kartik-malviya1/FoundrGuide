import app from "./app";
import connectDB from "./lib/db";

const PORT = process.env.PORT || 3001;

connectDB()
.then(()=>{
  app.listen(PORT)
  console.log(`Server is running at Port: ${process.env.PORT}`);
  app.on("Error ",(err)=>{
    console.log("Error: ", err);
    throw err
  }) 
})
.catch((err)=>{
  console.log("MongoDB connection failed !!", err);
})

