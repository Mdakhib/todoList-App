const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.get("/",(req,res)=>{
    
    var today=new Date();
    if(today.getDate()==6 || today.getDate()==0){
        res.send("Yay it's the weekend!");
    }
    else{
        res.send("Boo! I have to work!")
    }
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
}) 