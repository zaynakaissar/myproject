const express = require("express");
const mongoose =require("mongoose");
const app = express();
const Article = require("./models/article.js")
app.use(express.json());
// mongodb+srv://zaynabkaissar:<db_password>@cluster0.co90r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://zaynabkaissar:iz80E7AgLYHSuOpT@cluster0.co90r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log("connected successfuly!")
}).catch((error)=>{
    console.log("error connecting with mongoose ! ", error);
})
app.post("/article",async (req,res)=>{
    const newarticle = new article();
    newarticle.title = req.body.title;
    newarticle.body = req.body.body;
    newarticle.numberslikes = req.body.numberslikes;
    newarticle.save()
    .then(()=>res.send("article created successfuly!"))
    .catch((error)=>{
        console.log("error saving article",error)
    })
})
app.get("/article", async(req,res)=>{
    const articles = await Article.find()
    res.json(articles)
})
app.get("/article/:idnum",async(req,res)=>{
    id = req.params.idnum;
    const Article = await article.findById(id)
    res.json(Article);
})
app.delete("/article/:idnum",async(req,res)=>{
    id = req.params.idnum;
    const Article = await article.findByIdAndDelete(id)
    res.json(Article);
})
app.get("/hello",(req,res)=> {
    res.send("you visited hello");
})
app.get("/hi",(req,res)=> {
    res.send("<h1>hi</h1>")
})
app.post("/add/:num1/:num2",(req,res)=>{
    let {num1,num2} = req.params;
    let sum = Number(num1)+Number(num2);
})
app.post("/addquery",(req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let sum = Number(num1)+Number(num2);
    res.send(`${sum}`);
})

app.get("/numbers",(req,res)=>{
    let numbers = "";
    for(let i=0;i<=20;i++){
        numbers +=i+" "
    }
    res.render("numbers.ejs",{
        nums: numbers
    })
})
app.get("/showallarticles",async(req,res)=>{
   const articles =await article.find();
   res.render("articles.ejs",{
    articles: articles
   })
})
app.listen(4000,()=>{
    console.log("I am listening in port 4000 ! ");
})
