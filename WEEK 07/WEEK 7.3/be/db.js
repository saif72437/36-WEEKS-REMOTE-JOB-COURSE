import mongoose from "mongoose";

export async function connectToDB(){
    try {

        const connection = await mongoose.connect("mongodb://localhost:27017/todoApp")
        if(connection){
            console.log("CONNECTED TO DB");
            
        }
        
    } catch (error) {
        console.log("ERROR WHILE CONNECTING TO DB");
        
    }
}