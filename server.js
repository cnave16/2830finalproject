const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import your database connection

const app = express();
const PORT = 3000;

// Middleware to handle static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for Static Pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/reservation', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'reservation.html'));
});

// Test Database Connection
app.get('/test-db', (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Database connection error:', err);
      return res.status(500).send('Database connection failed.');
    }
    res.send(`Database connection successful: ${results[0].solution}`);
  });
});

// Handle Reservation Form Submission
app.post('/submit-reservation', (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Validate form data
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).send('All fields are required.');
  }

  // Insert data into the reservations table
  const sql = 'INSERT INTO reservations (name, email, date, time, guests) VALUES (?, ?, ?, ?, ?)';
  pool.query(sql, [name, email, date, time, guests], (err, result) => {
    if (err) {
      console.error('Error saving reservation:', err);
      return res.status(500).send('An error occurred while saving your reservation.');
    }

    console.log('Reservation saved:', result.insertId);

    // Confirmation response to the user
    res.send(`
      <h1>Reservation Confirmed</h1>
      <p>Thank you, ${name}. Your reservation for ${guests} guests on ${date} at ${time} has been confirmed!</p>
      <a href="/">Go back to the home page</a>
    `);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

