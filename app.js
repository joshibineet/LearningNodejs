const app = require("express")()


// req-request , res-response 

app.get("/",(req, res)=>{
   // res.send("<mark>Hello i am from home page</mark>")
   res.json({
    Joshi: "I am from home page",
    status: "student"
   })

})

app.get("/contact",(req,res)=>{
    res.json({
       message: "My name is Bineet Joshi"
    
    })
})

app.get("/about",(req,res)=>{
    res.send("I am about us thank you")
})

app.listen(3000,(req,res)=>{
    console.log("Nodejs has started at port 3000")
})