const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middleware/authMiddleware.js");
const { showProfile } = require("../controllers/profileControllers.js");

router.get("/profile", requireAuth, showProfile);

module.exports = router; //preguntar.
