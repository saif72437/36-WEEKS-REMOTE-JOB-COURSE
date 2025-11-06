const express = require("express");

const z = require("zod")

const app = express()

app.use(express.json())

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})


app.get("/login", (req, res)=>{
    
    const data = req.body;


    

    const response = loginSchema.safeParse(data)
   
   if(response.success){
       res.send("login succssfully")

   }

   res.send("invalid inputs")

    

})


app.listen(3000)