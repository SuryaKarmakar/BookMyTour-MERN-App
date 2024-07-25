const express = require("express");

const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createNewUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
