const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files
app.use(express.static(__dirname));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
