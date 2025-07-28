// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', require('./routes/index'));
// Start server
app.listen(port, function (err) {
    if (err) {
        console.log('Error:', err);
        return;
    }
    console.log('Server running on port ' ,port);
});