require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const artRoutes  = require("./routes/article");
const Article = require('./models/article');






// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/article",artRoutes)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
app.get("/api/article",async(req,res)=>{
  try{
    const allArticles=await Article.find({});
    res.status(200).json(allArticles);
   
  }catch(error){
    console.log(error);
    res.status(500).json({error:"internal server error"});
  }
})


const port = process.env.PORT || 8080;
app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});
