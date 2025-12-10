const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const authLogin = require("./routes/authLogin");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/auth", authLogin);

app.listen(3000, () => {
  console.log("✅ Backend corriendo en http://localhost:3000");
});
