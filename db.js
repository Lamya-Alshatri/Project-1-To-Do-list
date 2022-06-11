const mongoose = require("mongoose");

const dbURI = "mongodb+srv://LamyaDatabase:la@cluster0.o40bu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI);

// Extra

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("ERROR IN MongoDB");
});

db.on("connected", (err) => {
  console.log("MongoDB IS CONNECTED ..");
});