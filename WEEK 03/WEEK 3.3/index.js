const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

app.use(express.json())

const MY_SUPER_SCRECT_KEY = "123ABC"

app.post("/signup", (req, res)=>{
    const {email, password, name, age} = req.body;

   let token =  jwt.sign({email, name, age}, MY_SUPER_SCRECT_KEY)

   res.json({
    token
   })

})


app.get("/profile", (req, res)=>{
    const {token} = req.body

    console.log(token);
    
    if(!token){
        res.json({
            mssg: "Please login first"
        })
    }

    const data = jwt.verify(token, MY_SUPER_SCRECT_KEY)

    if(data){
        
    }

    res.json({
        data
    })


})



app.listen(3000)