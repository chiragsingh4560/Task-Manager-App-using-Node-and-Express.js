const mongoose=require('mongoose')

//schema models and basic validators
const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxLength:[20,"name cannot exceed 20 chars"]
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports=mongoose.model('Task',TaskSchema)