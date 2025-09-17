import mongoose from "mongoose";
export async function connectToDB(params) {
    try{
        const connec=await mongoose.connect("mongodb+srv://dhengleyadav:Yadav123@cluster0.gzezcao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }catch(error){
        console.log(error)
        process.exit(1)
    }
} 