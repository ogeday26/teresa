require("dotenv").config();
import { Client, Message } from 'discord.js';

import events from './events/index';
import commands from './commands/index';

(async () => {
  const client = new Client();
  const reserveKeys = [];

  events.forEach(e => {
    client.on(e.event, e.method(client));
  })

  client.on("message", async (message: Message) => {
    if (message.author.bot) return;

    if (message.content[0] === process.env.PREFIX) {
      const commandBody = message.content.slice(process.env.PREFIX.length);
      const args = commandBody.split(" ");
      const command = args.shift().toLowerCase();

      const c = commands.filter(c => c.key === command);
      if (c.length === 0) {
        message.reply("Command not found.");
        return;
      };
      c[0].method(message, command, args);
    }
  });

  client.login(process.env.DISCORD_TOKEN);
  console.log("Bot is starting");
})()