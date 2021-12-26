const  {Schema,model} = require("mongoose")

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: String,
  });

const usertat = model("Users Schema",userSchema)

module.exports = usertat;