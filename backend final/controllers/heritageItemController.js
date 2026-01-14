const heritageItemModel = require("../models/heritageItemModel");
const notificationModel = require("../models/notificationModel");

exports.createItem = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No media uploaded" });
  }

  const itemData = {
    title: req.body.title,
    description: req.body.description,
    language: req.body.language,
    media_path: req.file.path,
    uploaded_by: req.body.uploaded_by,
  };

  heritageItemModel.createItem(itemData, (err, itemId) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to create item" });
    }

    res.status(201).json({
      message: "Item uploaded successfully",
      id: itemId,
    });
  });
};

exports.getPendingItems = (req, res) => {
  heritageItemModel.getPending((err, items) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch pending items" });
    }
    res.json(items);
  });
};

exports.approveItem = (req, res) => {
  const id = req.params.id;

  heritageItemModel.approve(id, (err) => {
    if (err) {
      return res.status(404).json({ message: err.message });
    }

    notificationModel.createNotification("Item approved", () => {});
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
  heritageItemModel.searchByTitle(req.query.q, (err, items) => {
    if (err) {
      return res.status(500).json({ message: "Search failed" });
    }
    res.json(items);
  });
};

exports.filterByLanguage = (req, res) => {
  heritageItemModel.filterByLanguage(req.query.lang, (err, items) => {
    if (err) {
      return res.status(500).json({ message: "Filter failed" });
    }
    res.json(items);
  });
};
