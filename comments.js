// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Create an array to store comments
const comments = [];

// Create a GET route for /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST route for /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



