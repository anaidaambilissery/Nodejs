const express = require('express');

const app = express();

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

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});