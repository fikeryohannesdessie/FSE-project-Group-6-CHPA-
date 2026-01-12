// app.js
require("./database/db");

const express = require("express");
const cors = require("cors");

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ---------------- ROUTES (IMPORT FIRST) ---------------- */
const authRoutes = require("./routes/authRoutes");
const heritageItemRoutes = require("./routes/heritageItemRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

app.use("/auth", authRoutes);
app.use("/items", heritageItemRoutes);
app.use("/notifications", notificationRoutes);
app.use("/bookmarks", bookmarkRoutes);
app.use("/media", mediaRoutes);

/* ---------------- TEST ROUTE ---------------- */
app.get("/test", (req, res) => {
  res.json({ ok: true });
});

/* ---------------- START SERVER ---------------- */
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
