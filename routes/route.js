const express = require("express");

const {
  register,
  getUserDetail,
  login,
  deleteUserProfile,
  updateUser,
} = require("../controllers/controller.");

const router = express();

router.post("/registerUser", register);
router.post("/loginUser", login);
router.get("/getUserDetail", getUserDetail);
router.patch("/updateUserProfile", updateUser);
router.delete("/deleteUserProfile", deleteUserProfile);

// router.post("/loginUser",)

module.exports = router;
