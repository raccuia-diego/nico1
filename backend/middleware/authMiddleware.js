const { getCurrentUser } = require("../data/userStore");

exports.requireAuth = (req, res, next) => {
  const user = getCurrentUser();
  if (!user) {
    return res.status(401).json({ error: "No estás logueado" });
  }
  next();
};

//PREGUNTAR POR QUÉ EL REQ, RES, NEXT y qué hace el next.