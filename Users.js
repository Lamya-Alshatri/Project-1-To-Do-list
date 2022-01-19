const  {Schema,model} = require("mongoose")

const todoSchema = new Schema({
  title: String,
  isCompleted: Boolean
})

// Model




const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: String,
    Todos:[todoSchema]
  });

  

const usertat = model("Users Schema",userSchema)

module.exports = usertat;