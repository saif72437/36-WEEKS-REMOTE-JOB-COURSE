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

function errorHandlingMiddlware(err, req, res, next){
    if(err){
        res.status(500).json({
        mssg: "Something went wrong"
    })
    }
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



app.use(errorHandlingMiddlware)



app.listen(3000)