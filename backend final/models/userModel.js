const db = require("../database/db");

exports.findByEmail = (email, callback) => {
  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
  );
};

/**
 * (Optional) Find user by username
 * Keep this if other parts still use it
 */
exports.findByUsername = (username, callback) => {
  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    callback
  );
};
exports.create = (user, callback) => {
  db.run(
    `INSERT INTO users (username, email, password, role)
     VALUES (?, ?, ?, ?)`,
    [user.username, user.email, user.password, user.role],
    callback
  );
};
