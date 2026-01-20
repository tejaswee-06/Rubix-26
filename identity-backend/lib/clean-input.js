// lib/clean-input.js

export function cleanString(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .replace(/['"`;]/g, "")
    .trim();
}

export function cleanEmail(email) {
  email = cleanString(email).toLowerCase();

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error("Invalid email format");
  }

  return email;
}
