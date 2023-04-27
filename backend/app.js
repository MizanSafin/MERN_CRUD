const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const connectToDB = require("./db")
//createApp
const app = express()
//middleware
app.use(bodyParser.json({extended:true,limit:"20mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:"20mb"}))
app.use(cors())
connectToDB()

app.get("/",(req,res)=>{
   res.render("index.ejs",{title:"My name is Mizan"})
})


app.listen(3003,()=>{
    console.log(`App is running at the port : 3003`)
})