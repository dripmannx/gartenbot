const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 2000;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM sensor LIMIT 10", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("fetch")
    res.send(result);
  });
});
app.get("/api/single", (req, res) => {
  db.query("SELECT * FROM sensor LIMIT 1", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("fetch")
    res.send(result);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
