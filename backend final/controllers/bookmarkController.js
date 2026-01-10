const bookmarkModel = require("../models/bookmarkModel");

exports.addBookmark = (req, res) => {
  const { user_id, item_id } = req.body;

  if (!user_id || !item_id) {
    return res.status(400).json({ message: "Missing data" });
  }

  bookmarkModel.addBookmark(user_id, item_id, (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to add bookmark" });
    }
    res.json({ message: "Bookmark added" });
  });
};

exports.getUserBookmarks = (req, res) => {
  const userId = req.params.userId;

  bookmarkModel.getBookmarksByUser(userId, (err, items) => {
    if (err) {
      return res.status(500).json({ message: "Failed to load bookmarks" });
    }
    res.json(items);
  });
};

exports.removeBookmark = (req, res) => {
  const { user_id, item_id } = req.body;

  bookmarkModel.removeBookmark(user_id, item_id, (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to remove bookmark" });
    }
    res.json({ message: "Bookmark removed" });
  });
};
