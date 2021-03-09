const express = require('express');
const { searchUsers } = require('../controllers/users');

const router = express.Router({ mergeParams: true });

router.route('/:searchTerm').get(searchUsers);

module.exports = router;
