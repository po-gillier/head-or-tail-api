const express = require("express");
const app = express();
const port = 3000;

// Define routes
app.get("/head-or-tail", (req, res) => {
  const isHead = Math.random() < 0.5;
  res.json({ result: isHead ? "head" : "tail" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
