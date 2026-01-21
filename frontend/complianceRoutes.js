const express = require("express");
const { readFile, writeFile, getFilePath } = require("../utils/fileHandler");

const router = express.Router();

/**
 * GET /api/compliance
 * Returns compliance checklist with calculated score
 */
router.get("/", async (req, res) => {
  try {
    const filePath = getFilePath("compliance.json");
    const data = await readFile(filePath);

    // Calculate compliance score
    const total = data.checklist.length;
    const completed = data.checklist.filter(
      (item) => item.status === "completed",
    ).length;
    const score = Math.round((completed / total) * 100);

    res.json({
      score,
      completed,
      total,
      checklist: data.checklist,
      summary: data.summary,
    });
  } catch (error) {
    console.error("Error fetching compliance data:", error.message);
    res.status(500).json({ error: "Failed to fetch compliance data" });
  }
});

/**
 * POST /api/compliance/mark-completed
 * Mark a checklist item as completed
 */
router.post("/mark-completed", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const filePath = getFilePath("compliance.json");
    const data = await readFile(filePath);

    // Find and update the item
    const itemIndex = data.checklist.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).json({ error: "Checklist item not found" });
    }

    // Toggle completion status
    const currentStatus = data.checklist[itemIndex].status;
    data.checklist[itemIndex].status =
      currentStatus === "completed" ? "pending" : "completed";

    // Recalculate summary
    const completed = data.checklist.filter(
      (item) => item.status === "completed",
    ).length;
    data.summary.completed = completed;
    data.summary.total = data.checklist.length;

    // Write back to file
    await writeFile(filePath, data);

    // Calculate new score
    const score = Math.round((completed / data.checklist.length) * 100);

    res.json({
      success: true,
      message: "Checklist item updated",
      score,
      completed,
      total: data.checklist.length,
      item: data.checklist[itemIndex],
    });
  } catch (error) {
    console.error("Error updating checklist:", error.message);
    res.status(500).json({ error: "Failed to update checklist item" });
  }
});

/**
 * PUT /api/compliance/:id
 * Update a specific checklist item
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const filePath = getFilePath("compliance.json");
    const data = await readFile(filePath);

    const itemIndex = data.checklist.findIndex(
      (item) => item.id === parseInt(id),
    );

    if (itemIndex === -1) {
      return res.status(404).json({ error: "Checklist item not found" });
    }

    // Update the item with provided fields
    data.checklist[itemIndex] = {
      ...data.checklist[itemIndex],
      ...updates,
      id: parseInt(id), // Ensure ID doesn't change
    };

    // Recalculate summary
    const completed = data.checklist.filter(
      (item) => item.status === "completed",
    ).length;
    data.summary.completed = completed;
    data.summary.total = data.checklist.length;

    await writeFile(filePath, data);

    res.json({
      success: true,
      message: "Checklist item updated",
      item: data.checklist[itemIndex],
    });
  } catch (error) {
    console.error("Error updating checklist item:", error.message);
    res.status(500).json({ error: "Failed to update checklist item" });
  }
});

/**
 * DELETE /api/compliance/:id
 * Delete a checklist item
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const filePath = getFilePath("compliance.json");
    const data = await readFile(filePath);

    const itemIndex = data.checklist.findIndex(
      (item) => item.id === parseInt(id),
    );

    if (itemIndex === -1) {
      return res.status(404).json({ error: "Checklist item not found" });
    }

    const deletedItem = data.checklist.splice(itemIndex, 1);

    // Recalculate summary
    const completed = data.checklist.filter(
      (item) => item.status === "completed",
    ).length;
    data.summary.completed = completed;
    data.summary.total = data.checklist.length;

    await writeFile(filePath, data);

    res.json({
      success: true,
      message: "Checklist item deleted",
      deletedItem: deletedItem[0],
    });
  } catch (error) {
    console.error("Error deleting checklist item:", error.message);
    res.status(500).json({ error: "Failed to delete checklist item" });
  }
});

module.exports = router;
