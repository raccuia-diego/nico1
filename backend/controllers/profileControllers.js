const { getCurrentUser } = require("../data/userStore");

exports.showProfile = (req, res) => {
  const user = getCurrentUser(); // ← AHORA SÍ ejecutado

  if (!user) {
    return res.status(401).json({ error: "No hay usuario logueado" });
  }

  res.json(user); // ← Podés mandar solo el usuario
};
