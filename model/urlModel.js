import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    original_url:{
        required:true,
        type:String,
    },
    id:{
        required:true,
        type:String,
        unique:true
    }
})
export default mongoose.model("URL",urlSchema)