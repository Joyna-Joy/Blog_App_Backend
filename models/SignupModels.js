const mongoose=require("mongoose")

const signupSchema=new mongoose.Schema(
    {
        name:
  {      type:String,
        required:true},
        age:
{        type:String,
        required:true},
        mobile:
{        type:String,
        required:true},
        address:            
{        type:String,
        required:true},
        pincode:            
{        type:String,
        required:true},
        email:            
 {       type:String,
        required:true},
        password:            
{        type:String,
        required:true}
    }
)

module.exports=mongoose.model("signup",signupSchema)
