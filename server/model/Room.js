const mongoose=require('mongoose');
const roomSchema=mongoose.Schema({
    
    name:{
       type:String,
       required:true
    }
    ,
    maxCount:{
       type:Number,
       required:true
    }
   ,phoneNumber:{
       type:Number,
       required:true
   }
   ,rentPerDay:{
       type:Number,
       required:true
   }
   ,imageUrls:[]
   ,currentBookings:[]
   ,Type:{
       type:String,
       required:true
   }
   ,Description:{
       type:String,
       required:true
   }
})

const rooms=mongoose.model('rooms',roomSchema);
module.exports=rooms;