const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// ── STREAK — must be BEFORE /:userId ──────────────────────────────────────
router.get("/streak/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({
      userId,
      status: "Completed"
    }).sort({ updatedAt: -1 });

    if (!tasks.length) return res.json({ currentStreak: 0 });

    let streak = 0;
    let checkDate = new Date();
    checkDate.setHours(0, 0, 0, 0);

    const completedDates = [...new Set(
      tasks.map(t => {
        const d = new Date(t.updatedAt);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
      })
    )].sort((a, b) => b - a);

    for (const dateTs of completedDates) {
      if (dateTs === checkDate.getTime()) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    res.json({ currentStreak: streak });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET ALL TASKS FOR USER — must be AFTER /streak/:userId ────────────────
router.get("/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── ADD TASK ───────────────────────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      status: req.body.status || "Pending"
    });
    await task.save();
    res.status(201).json({ message: "Task added", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── UPDATE TASK ────────────────────────────────────────────────────────────
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Updated", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── DELETE TASK ────────────────────────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;