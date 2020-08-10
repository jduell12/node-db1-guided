const express = require("express");

// database access using knex
const db = require("../data/db-config.js"); //connection to database

const router = express.Router();

//respond with a list of posts from database
router.get("/", (req, res) => {
  //SQL query - SELECT * FROM Posts
  db.select("*")
    .from("posts")
    .then((posts) => {
      res.status(200).json({ data: posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
