const express=require("express")
const bodyParser=require("body-parser")
const app=express()


let items=["Khana","Peena","Sona"];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
        hour:"numeric",
        minute:"numeric"
    };
    let day=today.toLocaleDateString("en-US", options);

    res.render("list",{
        kindOfDay:day,
        newListItems:items
    });
});

app.post("/",(req,res)=>{
    var item=req.body.newItem;
    items.push(item)
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
}) 