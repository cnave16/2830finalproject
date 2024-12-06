const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '396Jm1209', // Replace with your MySQL password
  database: 'frankie_toccos'
});

module.exports = pool;
