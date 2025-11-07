const express = require("express");

const zod = require("zod")

const app = express()
app.use(express.json())

let ALL_TODOS = [
    {
        text: "Morning Walk",
        completed: false,
        id: 1,
    }
]

const todoSchema  = zod.object({
    text: zod.string()
})

app.post("/todo", (req, res)=>{
    const response = todoSchema.safeParse(req.body)


    if(!response.success){
        res.status(400).json({
            mssg: "Todos text is required"
        })
    }

    ALL_TODOS.push({
        id: Date.now(),
        text: response.data.text,
        completed: false

    })

    res.status(200).json({
        mssg: "Todo Create Successfully",
        todos: ALL_TODOS
    })


})

app.get("/todos", (req, res)=>{
    res.status(200).json({
        todos: ALL_TODOS
    })
})

app.get("/todo/:id", (req, res)=>{
    const todoId = req.params.id;
    if(!todoId){
        res.status(400).json({
            mssg: "Todo id is required"
        })
    }

    ALL_TODOS.forEach((singleTodo)=>{
        if(todoId == singleTodo.id){
            return res.status(200).json({
                singleTodo
            })
        }
    })

})

app.put("/todo/:id", (req, res)=>{
     const todoId = req.params.id;
    if(!todoId){
        res.status(400).json({
            mssg: "Todo id is required"
        })
    }

    ALL_TODOS.forEach((singleTodo)=>{
        if(todoId == singleTodo.id){
            singleTodo.completed = true
            res.status(200).json({
                singleTodo
            })
        }
    })

     res.status(400).json({
            mssg: "Invalid Todo"
        })
    

})

app.delete("/todo/:id", (req, res)=>{
     const todoId = req.params.id;
    if(!todoId){
        res.status(400).json({
            mssg: "Todo id is required"
        })
    }

    ALL_TODOS = ALL_TODOS.filter((singleTodo)=> {
        return singleTodo.id != todoId
    })
})



app.listen(3000)