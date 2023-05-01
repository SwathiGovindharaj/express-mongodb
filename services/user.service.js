const UserModel = require("../models/user.model");

exports.userSignUp = async (user) => {
  return await UserModel.create(user);
};

exports.userLogin = async (email) => {
  return await UserModel.findOne({ email });
};
