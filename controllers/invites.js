const User = require('../models/User');
const Invite = require('../models/Invite');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');

//@desc Get all invites
//@route GET /api/v1/invites
//@access Public
exports.getInvites = asyncHandler(async (req, res, next) => {
  const invites = await Invite.aggregate([
    { $match: { isDelete: false } },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    { $sort: { _id: -1 } },
  ]);

  res.status(200).json({
    success: true,
    data: invites,
  });
});

//@desc Create invites
//@route POST /api/v1/invites
//@access Public
exports.createInvite = asyncHandler(async (req, res, next) => {
  const searchUser = await User.find({
    userId: req.body.userId,
  });

  if (!searchUser) {
    return next(
      new ErrorResponse(`User with id ${req.body.userId} does not exist.`, 404)
    );
  }

  const searchInvite = await Invite.findOne({
    userId: req.body.userId,
  });

  if (searchInvite) {
    return next(
      new ErrorResponse(`User with id ${req.body.userId} already invited.`, 400)
    );
  }

  const invite = await Invite.create(req.body);

  res.status(201).json({
    success: true,
    data: invite,
  });
});

//@desc Delete invite
//@route DELETE /api/v1/invites/:id
//@access Public
exports.deleteInvite = asyncHandler(async (req, res, next) => {
  const invite = await Invite.findByIdAndUpdate(
    req.params.id,
    {
      $set: { isDelete: true },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: invite,
  });
});
