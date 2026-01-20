// lib/jsondatastore.js

import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "users.json");

export function readData() {
  if (!fs.existsSync(DATA_PATH)) {
    return { users: [] };
  }

  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

export function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}
