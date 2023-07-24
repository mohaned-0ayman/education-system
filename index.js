// Import needed modules
const express = require("express");
const path = require("path");
const ejs = require("ejs");

// Initializing express
const app = express();
const port = process.env.PORT || 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
  res.render("pages/index");
});

// Listening for incoming requests
app.listen(3000, () => {
  console.log(`Server started listening on port ${port}`);
});
