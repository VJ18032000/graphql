const User = require('../models/userModel');

const userController = {
  getUsers: async () => await User.find(),
  getUser: async (id) => await User.findById(id),
  createUser: async (input) => {
    const user = new User(input);
    return await user.save();
  },
  updateUser: async (id, input) => {
    return await User.findByIdAndUpdate(id, input, { new: true });
  },
  deleteUser: async (id) => {
    await User.findByIdAndDelete(id);
    return 'User deleted successfully';
  },
};

module.exports = userController;
