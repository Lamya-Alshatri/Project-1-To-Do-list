const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");
const Todo = require("./todo");
const usertat = require("./Users");
const { rawListeners } = require("./todo");
// console.log(Todo);

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("GET / is Working");
});

// CRUD: Create, Read, Update, Delete

app.get("/tasks", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.json(data);
    }
  });
});

//              ?key=value&key=value
app.get("/filter", (req, res) => {
  console.log(req.query);
  Todo.find({ isCompleted: req.query.isCompleted }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
/*
the up endpoint is replace to these two
app.get("/completed", (req, res) => {
  Todo.find({ isCompleted: true }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
app.get("/not_completed", (req, res) => {
  Todo.find({ isCompleted: false }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
*/

app.post("/tasks", (req, res) => {
  // console.log('25:',req.body);

  Todo.create(req.body, (err, newTask) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.status(201).json(newTask);
    }
  });
});

app.delete("/tasks/:id", (req, res) => {
  // console.log("37:", req.params.id);

  Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      deleteObj.deletedCount === 1
        ? res.json("Delete one todo successfully")
        : res.status(404).json("This todo is not found");
    }
  });
});

app.delete("/Alltasks", (req, res) => {
  // console.log("37:", req.params.id);

  Todo.deleteMany({}, (err, deleteObj) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log(deleteObj);
      deleteObj.deletedCount === 0
        ? res.status(404).json("There is no completed todo found")
        : res.json("Delete all completed todos successfully");
    }
  });
});

app.put("/tasks/:id", (req, res) => {
  // console.log("37:", req.params.id);
  Todo.updateOne(
    { _id: req.params.id },
    { title: req.body.newTitle },
    (err, updateObj) => {
      if (err) {
        // console.log("ERROR: ", err);
        res.status(400).json(err);
      } else {
        console.log(updateObj);
        updateObj.modifiedCount === 1
          ? res.json("Update one todo successfully")
          : res.status(404).json("This todo is not found");
      }
    }
  );
});

app.put("/tasks/:id/:isCompleted", (req, res) => {
  console.log("124:", req.params);
  Todo.updateOne(
    { _id: req.params.id },
    { isCompleted: req.params.isCompleted },
    (err, updateObj) => {
      if (err) {
        // console.log("ERROR: ", err);
        res.status(400).json(err);
      } else {
        console.log(updateObj);
        updateObj.modifiedCount === 1
          ? res.json("Update one todo successfully")
          : res.status(404).json("This todo is not found");
      }
    }
  );
});

app.post("/users/register", (req, res) => {
  usertat.create(req.body, (err, newUser) => {
    if (err) {
      // console.log("ERROR: ", err);
      res.status(400).json({ message: "This email already taken" });
    } else {
      // res.status(201).json(newUser);
      res.status(201).json({ message: "Create New User Successfully" });
    }
  });
});

app.post("/users/login", (req, res) => {
  usertat.find({ email: req.body.email }, (err, data) => {
    if (err) {
      
      console.log("ERROR: ", err);
    
    } else {
     
      console.log(data);
      if (data.length === 1) {
        console.log("we found the user")
        res.status(200).json({ message: "we found the user" });
        if (req.body.password === data[0].password) {
          res.json({message:"the password is correct"});
          console.log("the password is correct");
        } else {
          console.log("the password is incorrect");
          res.json({message:"the password is incorrect"});
        }
        res.status(201).json({ message: "This user is vlidated" });
        // res.json(data[0].username);
       
      } else {
        console.log("we didn't find the user")
        res.status(404).json({ message: "we didn't find the user" });
      }
    }
  });
});

app.listen(5000, () => {
  console.log("SERVER IS WORKING ..");
});
