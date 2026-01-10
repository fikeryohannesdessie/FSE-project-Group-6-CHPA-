const userModel = require("../models/userModel");

exports.login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username required" });
  }

  userModel.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  });
};
