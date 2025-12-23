const { findUserByEmail, createUser } = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    console.log("Entró al register.");

    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const existing = await findUserByEmail(email);

    if (existing) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    await createUser({ username, email, password });
    res.json({ message: "Usuario registrado con éxito" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    console.log("DB password:", user?.password);
    console.log("Input password:", password);

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    res.json({
      message: "Login exitoso",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
