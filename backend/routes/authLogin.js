const express = require("express");
const router = express.Router();

// Devuelve el usuario actualmente logueado
router.get("/me", (req, res) => {
  if (!global.currentUser) {
    return res.status(401).json({ error: "No hay un usuario logueado" });
  }

  res.json(global.currentUser);
});

module.exports = router;
