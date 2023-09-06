const express = require("express");
const router = express.Router();
const { Client, WhatsAppBot } = require("rompot");

router.get("/", function (req, res, next) {
  const client = new Client(new WhatsAppBot(), {
    disableAutoCommand: false,
    disableAutoTyping: false,
    disableAutoRead: false,
  });

  client.connect("./auth");

  console.log(`Status: ${client.status}`);

    client.on("open", (open) => {
      if (open.isNewLogin) {
        console.log("Nova conexão");
      }
      console.log("Cliente conectado!");

      client.on("message", (message) => {
        console.log(`Mensagem recebida de ${message.user.name}`);
        if (message.text == "Oi") {
          message.reply("Olá");
        }
      });
    });
  

  res.status(200).send({
    title: "indexRoute",
    version: "1.0.0",
  });
});

module.exports = router;
