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

router.post("/", (req, res) => {
  const post = req.body;

  //shortcut instead of using .from()
  db("posts")
    .insert(post)
    .returning("id") //if supporting PostgresSQL need this line
    .then((ids) => {
      // the warning: ".returning() is not supported by sqlite3 and will not have any effect."
      // can safely be ignored when using SQLite
      // it will go away when using PostgreSQL
      res.status(201).json({ inserted: ids });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorMessage: err.message,
      });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const postId = req.params.id;

  db("posts")
    .where({ id: postId })
    // .where("id", "=", postId) - another way to write the where
    .update(changes)
    .then((count) => {
      if (count) {
        res.status(200).json({ message: "Updated Post successfully" });
      } else {
        res.status(404).json({ message: "Post with that ID not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  db("posts")
    .where({ id: postId })
    .delete()
    .then((count) => {
      if (count) {
        res.status(200).json({ message: "Deleted Post Successfully" });
      } else {
        res.status(404).json({ message: "Post with that ID not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
