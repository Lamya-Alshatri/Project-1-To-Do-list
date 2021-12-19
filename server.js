const express = require("express")

const server = express()

server.use(express.json())

const db = require("./db")

const Todo = require("./module/Todo")

server.get("/",(req,res)=>{

res.json("get is working")

})

server.post("/",(req,res)=>{

    Todo.create({title:"Make salad",
    IsCompleted:"It is completed" })

    res.json("Created new To-Do successfully")

})

server.get("/tasks",(req,res)=>{

    Todo.find({},(err,data)=>{


        
    })
    
})
    

server.listen(3000,()=>{

console.log("server is working")
})



