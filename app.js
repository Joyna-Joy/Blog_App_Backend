const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signupRoute=require("./controllers/SignupRouters")
const postRouter=require("./controllers/PostRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Joyna-Joy-24:Joyna24joy@cluster0.gj0szp5.mongodb.net/blogdb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/signup",signupRoute)
app.use("api/post",postRouter)

app.listen(3001,()=>{
    console.log("server running")
})