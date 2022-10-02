require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
app.use(express.json());
app.use(cors());

//get all restaurants

app.get("/api/v1/cafe", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM cafe");
    res.status(200).json({
      status: "success",
      cafe: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//get a restaurant

app.get("/api/v1/cafe/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * from cafe where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      cafe: results.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

//create a restaurant
app.post("/api/v1/cafe", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO cafe(name,location,price_range) values($1,$2,$3) returning * ",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(200).json({
      status: "success",
      cafes: results.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//update a restaurant

app.put("/api/v1/cafe/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE cafe SET name=$1,location=$2,price_range=$3 where id=$4 returning * ",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      cafes: results.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

//delete this restaurant

app.delete("/api/v1/cafe/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE from cafe where id=$1 ", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "deleted",
      cafes: results.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
