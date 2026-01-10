const express = require("express");
const router = express.Router();
const bookmarkController = require("../controllers/bookmarkController");

router.post("/bookmarks", bookmarkController.addBookmark);
router.get("/bookmarks/:userId", bookmarkController.getUserBookmarks);
router.delete("/bookmarks", bookmarkController.removeBookmark);

module.exports = router;
