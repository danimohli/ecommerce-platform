const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/admin-only-route', verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;
