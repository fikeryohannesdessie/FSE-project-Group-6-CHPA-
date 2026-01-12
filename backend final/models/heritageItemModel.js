const db = require("../database/db");
exports.createItem = (item, callback) => {
  const sql = `
    INSERT INTO heritage_items (
      title,
      description,
      language,
      media_path,
      uploaded_by
    ) VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      item.title,
      item.description,
      item.language,
      item.media_path,
      item.uploaded_by
    ],
    function (err) {
      if (err) {
        return callback(err);
      }

      callback(null, this.lastID);
    }
  );
};
exports.getPendingItems = (callback) => {
  const sql = `
    SELECT * FROM heritage_items
    WHERE status = 'pending'
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }

    callback(null, rows);
  });
};
exports.approve = (id, callback) => {
  const sql = "UPDATE heritage_items SET approved = 1 WHERE id = ?";

  db.run(sql, [id], function (err) {
    if (err) {
      return callback(err);
    }

    // 🔴 VERY IMPORTANT CHECK
    if (this.changes === 0) {
      return callback(new Error("Item not found"));
    }

    callback(null);
  });
};
exports.getApproved = (callback) => {
  const sql = "SELECT * FROM heritage_items WHERE approved = 1";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};
exports.searchByTitle = (query, callback) => {
  const sql = `
    SELECT * FROM heritage_items
    WHERE approved = 1 AND title LIKE ?
  `;

  db.all(sql, [`%${query}%`], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};
exports.filterByLanguage = (lang, callback) => {
  const sql = `
    SELECT * FROM heritage_items
    WHERE approved = 1 AND language = ?
  `;

  db.all(sql, [lang], callback);
};
exports.getPending = (callback) => {
  const sql = "SELECT * FROM heritage_items WHERE approved = 0";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

