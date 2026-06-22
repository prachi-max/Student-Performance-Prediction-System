const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ── MIDDLEWARE ─────────────────────────────────────────────────────────────
app.use(cors({
  origin: function(origin, callback) {
    // Allow any vercel.app subdomain, localhost, and no-origin (Postman/curl)
    if (!origin || origin.match(/vercel\.app$/) || origin === "http://localhost:3000") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ── ROUTES ─────────────────────────────────────────────────────────────────
const authRoutes       = require("./routes/authRoutes");
const taskRoutes       = require("./routes/taskRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const articleRoutes    = require("./routes/articleRoutes");

app.use("/api/auth",     authRoutes);
app.use("/api/tasks",    taskRoutes);
app.use("/api/predict",  predictionRoutes);
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