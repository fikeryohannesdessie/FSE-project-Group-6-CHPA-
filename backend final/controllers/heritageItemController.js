const heritageItemModel = require("../models/heritageItemModel");
const notificationModel = require("../models/notificationModel");
exports.createItem = (req, res) => {
  const itemData = {
    title: req.body.title,
    description: req.body.description,
    language: req.body.language,
    media_path: req.body.media_path,
    uploaded_by: req.body.uploaded_by
  };

  heritageItemModel.createItem(itemData, (err, itemId) => {
    if (err) {
      return res.status(500).json({ message: "Failed to create item" });
    }

    res.status(201).json({
      message: "Item uploaded successfully",
      id: itemId
    });
  });
};
exports.getPendingItems = (req, res) => {
  heritageItemModel.getPendingItems((err, items) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch items" });
    }

    res.json(items);
  });
};
exports.approveItem = (req, res) => {
  const id = req.params.id;
  notificationModel.createNotification(
  "A heritage item was approved",
  () => {}
);

  heritageItemModel.approve(id, (err) => {
    if (err) {
      return res.status(404).json({ message: err.message });
    }

    res.json({ message: "Item approved" });
  });
};
exports.getApprovedItems = (req, res) => {
  heritageItemModel.getApproved((err, items) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch items" });
    }
    res.json(items);
  });
};
exports.searchItems = (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: "Query required" });
  }

  heritageItemModel.searchByTitle(q, (err, items) => {
    if (err) {
      return res.status(500).json({ message: "Search failed" });
    }
    res.json(items);
  });
};
exports.filterByLanguage = (req, res) => {
  const { lang } = req.query;

  heritageItemModel.filterByLanguage(lang, (err, items) => {
    if (err) {
      return res.status(500).json({ message: "Filter failed" });
    }
    res.json(items);
  });
};
exports.getPendingItems = (req, res) => {
  heritageItemModel.getPending((err, items) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch pending items" });
    }
    res.json(items);
  });
};
