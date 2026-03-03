const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log HTTP requests
app.use(morgan('dev'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Template',
        message: 'Welcome!'
    });
});

app.use((req, res) => {
    res.status(404).send('The page you are looking for does not exist.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});