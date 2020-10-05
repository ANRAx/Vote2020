const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

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

const userInfoRoute = require('./routes');

/**
 * Routes
 */
// res.json(res.locals.userInfo)
app.use('/api', userInfoRoute);

/**
 * Wildcard to catch all routes
 */
// app.get('/', (req, res) => {
//   res.status(200).send(public);
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));
/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  res.status(500).json({ err: err.message.toString() });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
