const express = require("express");
const cors = require("cors");
const complianceRoutes = require("./routes/complianceRoutes");
const alertRoutes = require("./routes/alertRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/compliance", complianceRoutes);
app.use("/api/alerts", alertRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `✅ Compliance Backend Server running on http://localhost:${PORT}`,
  );
  console.log("📋 Compliance API: http://localhost:5000/api/compliance");
  console.log("🚨 Alerts API: http://localhost:5000/api/alerts");
});
