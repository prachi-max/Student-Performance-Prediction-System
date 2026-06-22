const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const path = require("path");

// FIX: exec path must be absolute or run from correct cwd
// FIX: Added proper error handling and JSON response
router.get("/subject-performance", (req, res) => {
  const scriptPath = path.join(__dirname, "../ml/predict/predict_subject.py");

  exec(`python "${scriptPath}"`, { cwd: path.join(__dirname, "..") }, (error, stdout, stderr) => {
    if (error) {
      console.error("ML Error:", stderr);
      return res.status(500).json({ error: "Prediction script failed", detail: stderr });
    }

    try {
      const result = JSON.parse(stdout.trim());
      res.json({ result });
    } catch (e) {
      res.status(500).json({ error: "Failed to parse prediction output", raw: stdout });
    }
  });
});

module.exports = router;
