// app.js
require("./database/db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

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

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
