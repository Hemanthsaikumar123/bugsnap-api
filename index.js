const express = require("express");
const app = express();
const bugRoutes = require("./routes/bugs");

app.use(express.json());
app.use("/bugs", bugRoutes);

app.get("/", (req, res) => {
  res.send("BugSnap API is running");
});

app.listen(3000, () => console.log("Server running on 3000"));
