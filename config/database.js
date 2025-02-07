const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("🟢 Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("🔴 Erro ao conectar no banco de dados:", error);
  }
}

testConnection();

module.exports = sequelize;
