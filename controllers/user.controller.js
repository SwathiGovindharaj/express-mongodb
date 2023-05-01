const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET;

const userService = require("../services/user.service");

exports.userSignUp = async (req, res) => {
  try {
    const user = await userService.userSignUp({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    res.status(201).json({ data: user, token: token, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const user = await userService.userLogin(req.body.email);
    if (!user) res.status(400).json({ error: "User does not exist" });
    else {
      // bcrypt.compare(plainPassword, hashedPassword)
      if (!bcrypt.compareSync(req.body.password, user.password))
        res.status(401).json({ error: "Wrong password" });
      else {
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
        res.status(200).json({ data: user, token: token, status: "success" });
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
