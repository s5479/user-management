const express = require("express");
const {
  addUser,
  getAllUser,
  editUser,
  editConfirmUser,
  deleteUser,
} = require("../controller/user-controller.js");

const router = express.Router();

router.post("/adduser", addUser);
router.get("/getalluser", getAllUser);
router.get("/edituser/:id", editUser);
router.put("/edituser/:id", editConfirmUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
