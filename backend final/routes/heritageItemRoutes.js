const express = require("express");
const router = express.Router();

const heritageItemController = require("../controllers/heritageItemController");
const { requireRole } = require("../middleware/authorize");

router.post(
  "/items",
  // requireRole("contributor"),
  heritageItemController.createItem
);

router.put(
  "/items/:id/approve",
  requireRole("admin"),
  heritageItemController.approveItem
);

module.exports = router;
router.get("/items", heritageItemController.getApprovedItems);
router.get("/items/search", heritageItemController.searchItems);
router.get("/items/filter", heritageItemController.filterByLanguage);
router.get(
  "/items/pending",
  requireRole("admin"),
  heritageItemController.getPendingItems
);
