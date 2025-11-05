const express = require("express")

const app = express()

function authCheck(req, res, next) {
    const token = req.headers["authorization"]
    if(!token){
        res.json({
            mssg:"Please provide the token"
        })
    }

    next()

}


app.get("/profile", authCheck, (req, res)=>{
    
    res.json({
        user:{
            username: "Saif",
            email: "Saif@gmail.com",
            name: "Saifullah Khan"
        }
    })

})


app.post("/login", (req, res)=>{
    let data = req.body;

    res.json({
        token : "123abc"
    })
})

app.listen(3000)