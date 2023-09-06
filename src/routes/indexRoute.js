const { Client, WhatsAppBot } = require("rompot");
const express = require("express");

const client = new Client(new WhatsAppBot(), {
  disableAutoCommand: false,
  disableAutoTyping: false,
  disableAutoRead: false,
});

client.on("open", (open) => {
  if (open.isNewLogin) {
    console.log("Nova conexão");
  }

  console.log("Cliente conectado!");
});

client.on("message", (message) => {
  console.log(`Mensagem recebida de ${message.user.name}`);

  if (message.text == "Oi") {
    message.reply("Olá");
  }
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("Autenticando...");

  await client.connect("./auth");

  res.status(200).send({
    title: "indexRoute",
    version: "1.0.0",
  });
});

module.exports = router;
