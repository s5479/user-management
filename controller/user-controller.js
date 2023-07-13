const User = require("../model/user-schema.js");
const addUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const editUser = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editConfirmUser = async (req, res) => {
  // const { user } = req.body;
  // const editUser = new User(user);
  // console.log(req.body);
  // console.log("hello");
  try {
    await User.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = { addUser, getAllUser, editConfirmUser, editUser, deleteUser };
