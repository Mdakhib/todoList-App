const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.get("/",(req,res)=>{
    res.send("the Todo-list is working")
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
}) 