const fs = require("fs");
const path = require("path");

const USERS_PATH = path.join(__dirname, "/users.json");

function getAllUsers() {
  try {
    if (!fs.existsSync(USERS_PATH)) return [];

    const data = fs.readFileSync(USERS_PATH, "utf8");
    if (!data.trim()) return [];

    return JSON.parse(data);
  } catch (err) {
    console.error("Error leyendo users.json:", err);
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
}

function findUser(email) {
  const users = getAllUsers(); // ← ESTA ERA LA FALLA
  return users.find((u) => u.email === email);
}

function getCurrentUser() {
  return global.currentUser || null;
}

module.exports = {
  getAllUsers,
  saveUsers,
  findUser,
  getCurrentUser,
};
