const express = require('express');

const app = express();

//middleware
const logger = (req, res, next) => {
    console.log("Request received!");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
};

// Register middleware
app.use(logger);

// Routes
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "David" }
];

// GET - Read users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST - Create user
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    users
  });
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});