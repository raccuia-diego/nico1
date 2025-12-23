require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
// const profileRoutes = require("./routes/profile");
// const authLogin = require("./routes/authLogin");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
// app.use("/api", profileRoutes);
// app.use("/auth", authLogin);

app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
