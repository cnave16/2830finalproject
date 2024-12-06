# 2830finalproject
Frankie Tocco's Restaurant Website
This is a fully functional website for Frankie Tocco's Italian Restaurant. It provides pages for menu, about, contact, and reservations, along with a backend powered by Node.js and a MySQL database for handling reservation submissions.

--Features
Static Pages:

Home
Menu
About
Contact
Reservation
Reservation System:

Allows users to reserve tables by filling out a form.
Stores reservation details in a MySQL database.
Responsive Design:

Website is styled for various screen sizes using modern CSS.
Backend Functionality:

Node.js server with routes for serving static pages and handling form submissions.
Integration with MySQL for database operations.
Database:

MySQL database for managing reservations.

--Folder Structure

2830finalproject/
├── public/                    # Static assets (CSS, images, etc.)
│   ├── css/
│   │   └── styles.css         # Global styles for the website
│   ├── images/                # Images used on the website
│   │   └── reservation-hero.jpg
├── views/                     # HTML files for website pages
│   ├── index.html             # Home page
│   ├── menu.html              # Menu page
│   ├── about.html             # About page
│   ├── contact.html           # Contact page
│   ├── reservation.html       # Reservation page
├── db.js                      # MySQL database connection
├── server.js                  # Node.js server code
├── package.json               # Node.js project dependencies
└── package-lock.json          # Locked versions of dependencies

--Technologies Used
Frontend:
HTML5
CSS3
JavaScript (optional for form validation)
Backend:
Node.js
Express.js
MySQL


Setup Instructions
1. Clone the Repository
git clone https://github.com/cnave16/2830finalproject.git
cd 2830finalproject
2. Install Dependencies
Run the following command to install the required Node.js packages:
npm install
3. Configure the Database
Open MySQL Workbench or your MySQL client.
Run the following SQL commands to create the database and table:

CREATE DATABASE frankie_toccos;

USE frankie_toccos;

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    guests INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Update the db.js file with your MySQL credentials:

const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // Replace with your MySQL username
  password: '',         // Replace with your MySQL password
  database: 'frankie_toccos'
});

module.exports = pool;
4. Start the Server
Run the following command to start the server:
node server.js
The server will start at http://localhost:3000

Routes Overview
Static Pages
/ - Home page
/menu - Menu page
/about - About page
/contact - Contact page
/reservation - Reservation page

API Endpoints
/submit-reservation (POST) - Handles reservation form submission.
/test-db (GET) - Tests database connection.

Testing the Application
Homepage:

Visit http://localhost:3000/.
Navigation:

Navigate to other pages using the menu links (Menu, About, Contact, Reservation).
Reservation Submission:

Go to http://localhost:3000/reservation.
Fill in the form and submit.
Check the database to ensure the reservation was saved:

SELECT * FROM reservations;

Test Database Connection:
Visit http://localhost:3000/test-db.

Contributors: Joseph Mun, Chase Nave, Cade Custard, Caleb Porting