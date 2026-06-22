const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ── MIDDLEWARE ─────────────────────────────────────────────────────────────
app.use(cors({
  origin: ["http://localhost:4200", "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());

// ── ROUTES ─────────────────────────────────────────────────────────────────
const authRoutes      = require("./routes/authRoutes");
const taskRoutes      = require("./routes/taskRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
// FIX: articleRoutes were referenced but never registered
const articleRoutes   = require("./routes/articleRoutes");

app.use("/api/auth",    authRoutes);
app.use("/api/tasks",   taskRoutes);
app.use("/api/predict", predictionRoutes);
app.use("/api/articles", articleRoutes);

// ── HEALTH CHECK ───────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "Student Performance Tracker API is running 🚀" });
});

// ── DATABASE ───────────────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
