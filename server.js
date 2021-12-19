const express = require("express")

const server = express()

server.use(express.json())

const db = require("./db")

const Todo = require("./module/Todo")

server.get("/1",(req,res)=>{

res.json("get is working")

})

server.post("/po",(req,res)=>{

    Todo.create(req.body, (err,newtask)=>{
        if (err) {
            console.log("ERROR: ", err);
          } else {
            res.status(201).json(newtask);
        }
    });
  
    res.json("Created new To-Do successfully")

})

server.get("/ge1",(req,res)=>{

    Todo.find({}, (err, data) => {
        if (err) {
          console.log("ERROR: ", err);
        } else {
          res.json(data);
        }
      });
    
})

server.delete("/hello",(req,res)=>{

Todo.deleteOne({
  title:"Wash the dishes",
  IsCompleted:"Completed"},
  (err,deleteCount)=>{
  if (err) {
    console.log("ERROR: ", err);
  } else {
    res.status(200).json(deleteCount);
  }
})
})

server.put("/leena", (req,res)=>{

Todo.updateOne({title:"hallo",IsCompleted:"NotCompleted"}, { $set: {title:"hallo1",IsCompleted:"NotCompleted"}},
            (err,theUpdatedOne)=>{
              if(err){
                console.log("ERROR: ",err);
              }else{
                res.status(200).json(theUpdatedOne)
              }
            }
)

})

server.listen(3000,()=>{

console.log("server is working")
})



