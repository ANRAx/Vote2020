const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

/**
 * Paths
 */
const index = path.join(__dirname, '..', 'public', 'index.html');
const public = path.join(__dirname, '..', 'public');

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(public));

/**
 * Routes
 */
app.get('/api', (req, res) => res.send('hello from api'));

/**
 * Wildcard to catch all routes
 */
app.get('*', (req, res) => res.sendFile(public));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  res.status(500).json({ err: err.message.toString() });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));