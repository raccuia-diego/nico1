const { poolPromise, sql } = require("../config/db");

const findUserByEmail = async (email) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("select * from users where email = @email");

    //preguntar
    return result.recordset[0];
  } catch (err) {
    console.error(err);
  }
};

const createUser = async ({ username, email, password }) => {
  try {
    console.log("➡️ createUser llamado:", username, email);

    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("username", sql.NVarChar, username)
      .input("email", sql.NVarChar, email)
      .input("password", sql.NVarChar, password)
      .query(`
        INSERT INTO users (username, email, password)
        VALUES (@username, @email, @password)
      `);

    console.log("✅ INSERT ejecutado");
    console.log("rowsAffected:", result.rowsAffected);
  } catch (err) {
    console.error("❌ Error en createUser:", err);
  }
};

module.exports = {
  findUserByEmail,
  createUser,
};
