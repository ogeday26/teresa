import { Message, Client } from "discord.js";

export default {
  key: "ping",
  description: "Returns the message delivery time.",
  method: async (message: Message, command: string, args: Array<string>) => {
    try {
      message.reply(`Ping : **${message.client.ws.ping}ms!`);
    } catch (err) {
      message.reply("The command could not be processed.");
    }
  }
}