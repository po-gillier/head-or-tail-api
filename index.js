const express = require("express");
const app = express();
const port = 3000;

// Define routes
app.get("/", (req, res) => {
  res.json({ result: "head" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
