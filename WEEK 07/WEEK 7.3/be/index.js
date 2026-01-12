import express from "express"
import { CreateSchema, IDSchema } from "./types"
import { Todo } from "./todo.model"

const app = express()

app.get("/", (req, res)=>{
    res.send("hello guys")
})

// todo create
app.post("/create", async (req, res)=>{
    const {success, data} = CreateSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            mssg: "Invalid inputs"
        })
    }

    const todo = await Todo.create({
        text: data.text
    })
    if(!todo){
        return res.status(404).json({
            mssg: "Error while creating todo"
        })
    }
     res.status(200).json({
            mssg: "Todo created Successfully",
            todo
        })
})


// todo delete

app.delete("/delete/:id", async (req, res)=>{
    const {success, data} = IDSchema.safeParse(req.body)
     if(!success){
        return res.status(411).json({
            mssg: "Invalid inputs"
        })
    }

    await Todo.findByIdAndDelete(data.id)

     res.status(200).json({
            mssg: "Todo Deleted Successfully"
        })


})
// todo update

app.put("/update/:id", async (req, res)=>{
    const {success, data} = IDSchema.safeParse(req.body)
     if(!success){
        return res.status(411).json({
            mssg: "Invalid inputs"
        })
    }

    const updatedTodo = await Todo.findByIdAndUpdate(data.id, {completed: true}, {new: true})

    if(!updatedTodo){
         return res.status(500).json({
            mssg: "Error while updating todo"
        })
    }

      res.status(200).json({
            mssg: "Todo updated Successfully",
            updatedTodo
        })

})

// todo get

app.get("/todo/:id", async (req, res)=>{
 const {success, data} = IDSchema.safeParse(req.body)
     if(!success){
        return res.status(411).json({
            mssg: "Invalid inputs"
        })
    }

    const todo = await Todo.findById(data.id)

 
         res.status(200).json({
            todo
        })
    


})

// todos
app.post("/todos", async (req, res)=>{
    const todos = await Todo.find()
    res.status(200).json({
        todos
    })
})


app.listen(3000, ()=>{
    console.log("APP IS RUNNNING");
    
})