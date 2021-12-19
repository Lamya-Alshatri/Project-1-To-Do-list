const express = require("express")

const server = express()

server.use(express.json())

const db = require("./db")

const Todo = require("./Todo")

server.get("/",(req,res)=>{

res.json("get is working")

})

server.get("/",(req,res)=>{

    Todo.find({},(err,data)=>{


        
    })
    
    })
    

server.listen(3000,()=>{

console.log("server is working")
})



