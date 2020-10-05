const express = require('express');
const router = express.Router();

const locationMiddleware = require('./controllers/locationControllers.js');
const userVoteInfo = require('./controllers/userVoteController.js');

router.get('/voteinfo', locationMiddleware, userVoteInfo, (req, res) => {
  res.status(200).json(res.locals.userInfo);
});

module.exports = router;
