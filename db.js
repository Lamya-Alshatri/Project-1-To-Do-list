const  mongoose = require("mongoose") 

const url ="mongodb://localhost:27017/TodoList";

mongoose.connect(url)

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("ERROR IN MongoDB",err);
});

db.on("connected", (err) => {
  console.log("MongoDB IS CONNECTED ..");
});

