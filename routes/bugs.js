const express = require("express");
const router = express.Router();
const bugs = require("../data/bugs");

router.post("/", (req, res) => {
  const { title, description, severity } = req.body;

  const bug = {
    id: Date.now(),
    title,
    description,
    severity,
    status: "open",
  };

  bugs.push(bug);
  res.status(201).json(bug);
});

module.exports = router;
