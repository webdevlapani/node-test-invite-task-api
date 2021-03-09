const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');

//@desc Search users
//@route GET /api/v1/users/:searchTerm
//@access Public
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({
    name: { $regex: `.*${req.params.searchTerm}.*`, $options: 'i' },
  });

  res.status(200).json({
    success: true,
    data: users,
  });
});
