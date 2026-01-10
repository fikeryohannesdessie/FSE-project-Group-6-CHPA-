const db = require("../database/db");

exports.findByUsername = (username, callback) => {
  const sql = "SELECT * FROM users WHERE username = ?";

  db.get(sql, [username], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};
