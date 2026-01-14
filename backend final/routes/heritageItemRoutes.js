const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middleware/upload");
const heritageItemController = require("../controllers/heritageItemController");
const { requireRole } = require("../middleware/authorize");

router.post(
  "/items",
  uploadFile.single("media"),
  heritageItemController.createItem
);

router.get("/items", heritageItemController.getApprovedItems);
router.get("/items/search", heritageItemController.searchItems);
router.get("/items/filter", heritageItemController.filterByLanguage);

router.get(
  "/items/pending",
  requireRole("admin"),
  heritageItemController.getPendingItems
);

router.put(
  "/items/:id/approve",
  requireRole("admin"),
  heritageItemController.approveItem
);

module.exports = router;
