
const {Schema,model} = require("mongoose");

const TodoSchema = new Schema ({

title:String,
IsCompleted:String

})

const Todo = model("Todo",TodoSchema)

module.exports = Todo