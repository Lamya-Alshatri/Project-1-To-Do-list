const express = require("express")

const server = express()

server.use(express.json())

const db = require("./db")

const Todo = require("./module/Todo")

server.get("/1",(req,res)=>{

res.json("get is working")

})

server.post("/",(req,res)=>{

    Todo.create(req.body, (err,newtask)=>{
        if (err) {
            console.log("ERROR: ", err);
          } else {
            res.status(201).json(newtask);
        }
    });
  
    res.json("Created new To-Do successfully")

})

server.get("/3",(req,res)=>{

    Todo.find({}, (err, data) => {
        if (err) {
          console.log("ERROR: ", err);
        } else {
          res.json(data);
        }
      });
    
})
    

server.listen(3000,()=>{

console.log("server is working")
})



