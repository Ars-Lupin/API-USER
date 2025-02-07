const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Permite requisições de diferentes origens
app.use(express.json()); // ✅ Permite JSON no corpo das requisições

app.use("/api", userRoutes);

async function startServer() {
  try {
    await sequelize.sync();
    console.log("📦 Banco de dados sincronizado!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
}

startServer();
