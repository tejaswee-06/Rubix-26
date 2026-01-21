const express = require("express");
const { readFile, writeFile, getFilePath } = require("../utils/fileHandler");

const router = express.Router();

/**
 * GET /api/alerts
 * Returns all alerts
 */
router.get("/", async (req, res) => {
  try {
    const filePath = getFilePath("alerts.json");
    const data = await readFile(filePath);

    res.json({
      alerts: data.alerts,
      unreadCount: data.alerts.filter((alert) => !alert.isRead).length,
    });
  } catch (error) {
    console.error("Error fetching alerts:", error.message);
    res.status(500).json({ error: "Failed to fetch alerts" });
  }
});

/**
 * POST /api/alerts/mark-read
 * Mark an alert as read
 */
router.post("/mark-read", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const filePath = getFilePath("alerts.json");
    const data = await readFile(filePath);

    // Find and update the alert
    const alertIndex = data.alerts.findIndex((alert) => alert.id === id);

    if (alertIndex === -1) {
      return res.status(404).json({ error: "Alert not found" });
    }

    data.alerts[alertIndex].isRead = true;

    // Write back to file
    await writeFile(filePath, data);

    const unreadCount = data.alerts.filter((alert) => !alert.isRead).length;

    res.json({
      success: true,
      message: "Alert marked as read",
      alert: data.alerts[alertIndex],
      unreadCount,
    });
  } catch (error) {
    console.error("Error marking alert as read:", error.message);
    res.status(500).json({ error: "Failed to mark alert as read" });
  }
});

/**
 * POST /api/alerts
 * Create a new alert
 */
router.post("/", async (req, res) => {
  try {
    const { message, type, date } = req.body;

    if (!message || !type) {
      return res.status(400).json({ error: "Message and type are required" });
    }

    const filePath = getFilePath("alerts.json");
    const data = await readFile(filePath);

    // Generate new ID
    const maxId = Math.max(...data.alerts.map((a) => a.id), 0);
    const newId = maxId + 1;

    const newAlert = {
      id: newId,
      message,
      type,
      date: date || new Date().toISOString().split("T")[0],
      isRead: false,
    };

    data.alerts.push(newAlert);

    // Write back to file
    await writeFile(filePath, data);

    res.status(201).json({
      success: true,
      message: "Alert created",
      alert: newAlert,
    });
  } catch (error) {
    console.error("Error creating alert:", error.message);
    res.status(500).json({ error: "Failed to create alert" });
  }
});

/**
 * DELETE /api/alerts/:id
 * Delete an alert
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const filePath = getFilePath("alerts.json");
    const data = await readFile(filePath);

    const alertIndex = data.alerts.findIndex(
      (alert) => alert.id === parseInt(id),
    );

    if (alertIndex === -1) {
      return res.status(404).json({ error: "Alert not found" });
    }

    const deletedAlert = data.alerts.splice(alertIndex, 1);

    // Write back to file
    await writeFile(filePath, data);

    res.json({
      success: true,
      message: "Alert deleted",
      deletedAlert: deletedAlert[0],
    });
  } catch (error) {
    console.error("Error deleting alert:", error.message);
    res.status(500).json({ error: "Failed to delete alert" });
  }
});

/**
 * POST /api/alerts/mark-all-read
 * Mark all alerts as read
 */
router.post("/mark-all-read", async (req, res) => {
  try {
    const filePath = getFilePath("alerts.json");
    const data = await readFile(filePath);

    data.alerts.forEach((alert) => {
      alert.isRead = true;
    });

    // Write back to file
    await writeFile(filePath, data);

    res.json({
      success: true,
      message: "All alerts marked as read",
      unreadCount: 0,
    });
  } catch (error) {
    console.error("Error marking all alerts as read:", error.message);
    res.status(500).json({ error: "Failed to mark alerts as read" });
  }
});

module.exports = router;
