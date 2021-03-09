const express = require('express');
const {
  getInvites,
  createInvite,
  deleteInvite,
} = require('../controllers/invites');

const router = express.Router({ mergeParams: true });

router.route('/').get(getInvites).post(createInvite);
router.route('/:id').delete(deleteInvite);

module.exports = router;
