const express = require("express");
const router = express.Router();
const bugs = require("../data/bugs");

router.get("/", (req, res) => {
  res.json(bugs);
});

router.post("/", (req, res) => {
  const { title, description, severity } = req.body;

  const bug = {
    id: Date.now(),
    title,
    description,
    severity,
    status: "new",
  };

  bugs.push(bug);
  res.status(201).json(bug);
});

module.exports = router;
