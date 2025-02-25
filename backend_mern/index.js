const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const app = express();
app.use(express.json())
const PORT = 3001;
dotenv.config();

console.log(process.env.MONGODB_URL);
mdb
 //if it doesn't connect with global host replace it with mongodb://127.0.0:27017/
 .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection successfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});

app.get("/static", (req, res) => {
  res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/index2.html");
});
app.post("/signup", (req, res) => {
  try {
    console.log(req.body)
    const {firstName,lastName,email,password,phoneNumber}=req.body;
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber ,
      password: password,
      email: email,
    });
    newSignup.save()
    console.log("Signup successful");
        res.status(201).json({message:"Signup Successful",isSignUp:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Signup Unsuccessful",isSignUp:false})
    }
});
// app.get("/action.html",(req,res)=>{
//     res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/action.html")
// })

app.listen(PORT, () => {
  console.log("Server started successfully");
});
