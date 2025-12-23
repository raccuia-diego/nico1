const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config(); // 👈 SIEMPRE ARRIBA

const app = express();

// ================= CONFIG =================
const PORT = process.env.FRONT_PORT
const API_URL = process.env.API_URL;

if (!API_URL) {
  console.error("❌ API_URL no está definida en el .env");
}

// =========================================

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 👉 HACER API_URL GLOBAL PARA TODAS LAS VISTAS
app.use((req, res, next) => {
  res.locals.API_URL = API_URL;
  next();
});

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ============ RUTAS FRONT ============
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

// =====================================

app.listen(PORT, () => {
  console.log(`✅ Frontend corriendo en http://localhost:${PORT}`);
  console.log("API_URL:", API_URL);
});