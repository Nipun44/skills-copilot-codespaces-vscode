// Create web server





// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// Create web server
const app = express();

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        res.json(comments);
    });
}
);

app.post('/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save().then(() => {
        res.json(comment);
    });
}
);

app.get('/comments/:id', (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        res.json(comment);
    });
}
);


