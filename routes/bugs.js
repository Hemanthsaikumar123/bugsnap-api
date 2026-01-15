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
    status: "OPEN",
  };

  bugs.push(bug);
  res.status(201).json(bug);
});


router.patch("/:id/fix", (req, res) => {
  const id = Number(req.params.id);
  const bug = bugs.find(b => b.id === id);

  if (!bug) {
    return res.status(404).json({ error: "Bug not found" });
  }

  bug.status = "FIXED";
  res.json(bug);
});


module.exports = router;
