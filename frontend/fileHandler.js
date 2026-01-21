const fs = require("fs");
const path = require("path");

/**
 * Read JSON file
 * @param {string} filePath - Path to JSON file
 * @returns {Promise<object>} - Parsed JSON data
 */
const readFile = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    throw new Error(`Failed to read file: ${filePath}`);
  }
};

/**
 * Write JSON file
 * @param {string} filePath - Path to JSON file
 * @param {object} data - Data to write
 * @returns {Promise<void>}
 */
const writeFile = async (filePath, data) => {
  try {
    await fs.promises.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      "utf-8",
    );
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    throw new Error(`Failed to write file: ${filePath}`);
  }
};

/**
 * Get file path from data directory
 * @param {string} fileName - Name of file
 * @returns {string} - Full path to file
 */
const getFilePath = (fileName) => {
  return path.join(__dirname, "..", "data", fileName);
};

module.exports = {
  readFile,
  writeFile,
  getFilePath,
};
