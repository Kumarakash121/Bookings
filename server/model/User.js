const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({


    name:{
      type:"String",
      required:true
    },
    email:{
        type:"String",
        required:true
    }
    ,password:{
        type:"String",
        required:true
    },
    cpassword:{
      type:"String",
      required:true
    }
    ,
    isAdmin:{
        type:"String",
        default:false
    },
    
  },{
    timeStamps:true,
  })
  
  const User=mongoose.model("User",UserSchema);
module.exports=User;