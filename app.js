const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Melayani file statis dari public
app.use(express.static(path.join(__dirname, 'public')));

// Melayani file HTML dari views (opsional)
app.use(express.static(path.join(__dirname, 'views')));

// Define a route for the root of the app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
