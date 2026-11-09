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
// DELETE - Remove a user
app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  users = users.filter((user) => user.id !== userId);

  res.json({
    message: "User deleted successfully",
    users
  });
});


// PUT - Replace an existing user
app.put("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(
    (user) => user.id === userId
  );

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users[userIndex] = {
    id: userId,
    ...req.body
  };

  res.json({
    message: "User updated successfully",
    user: users[userIndex]
  });
});


// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});