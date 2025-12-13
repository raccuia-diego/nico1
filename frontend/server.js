const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;
const API_URL = process.env.API_URL;
app.locals.API_URL = API_URL;

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rutas DEL FRONT (NO del back)
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

// Iniciar servidor
app.listen(PORT, () =>
  console.log(`Frontend corriendo en http://localhost:${PORT}`)
);
