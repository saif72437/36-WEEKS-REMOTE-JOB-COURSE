import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    completed: {
        type : Boolean,
        required:false
    }
}, {timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)