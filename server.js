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
app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: "John",
        role: "Developer"
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});