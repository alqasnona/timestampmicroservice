// Timestamp Microservice
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Root endpoint - serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API endpoint for timestamp
app.get('/api/:date?', (req, res) => {
  let dateParam = req.params.date;
  let date;

  // If no date parameter is provided, use current date
  if (!dateParam) {
    date = new Date();
  } else {
    // Check if the date parameter is a Unix timestamp (all digits)
    if (/^\d+$/.test(dateParam)) {
      date = new Date(parseInt(dateParam));
    } else {
      // Otherwise, try to parse as a date string
      date = new Date(dateParam);
    }
  }

  // Check if the date is valid
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  // Return the Unix timestamp (in milliseconds) and UTC string
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Timestamp Microservice listening at http://localhost:${port}`);
});
