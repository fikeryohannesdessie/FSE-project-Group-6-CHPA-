// app.js
require("./database/db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const notificationRoutes = require("./routes/notificationRoutes");
const authRoutes = require("./routes/authRoutes");
const heritageItemRoutes = require("./routes/heritageItemRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

app.use(authRoutes);
app.use(heritageItemRoutes);
app.use(notificationRoutes);
app.use(bookmarkRoutes);
app.use(mediaRoutes);
app.listen(3001, () => {
  console.log("Server running on port 3001");
});


app.get("/test", (req, res) => res.json({ ok: true }));