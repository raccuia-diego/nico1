const { getAllUsers, saveUsers, findUser } = require("../data/userStore");

exports.register = (req, res) => {
  try {
    console.log("Entró al register.");

    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const users = getAllUsers();
    const existing = findUser(email);

    if (existing) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    const newUser = { username, email, password };
    users.push(newUser);

    saveUsers(users);

    res.json({ message: "Usuario registrado con éxito" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    const user = findUser(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    global.currentUser = user;

    res.json({ message: "Login exitoso", user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};