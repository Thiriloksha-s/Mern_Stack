const express = require("express");

const app = express();
app.get("/static",(req,res)=>{
    res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/index2.html")
})
app.get("/part.html",(req,res)=>{
    res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/part.html")
})
app.get("/action.html",(req,res)=>{
    res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/action.html")
})
const PORT = 3001;


app.listen(PORT, () =>{
     console.log("Server started successfully");
});
