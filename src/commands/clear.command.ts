import { Message } from "discord.js";

export default {
  key: "clear",
  description: "Clear command",
  method: async (message: Message, command: string, args: Array<string>) => {
    try {
      if (message.guild.ownerID !== message.author.id) return message.reply("Bu işlemi sadece sunucu sahibi yapabilir.");
      
      if (args[0] && +args[0] !== NaN && typeof +args[0] === "number" && message.channel.type === "text") {
        message.channel.bulkDelete(+args[0]);
        return;
      }
      message.reply("Parameter error.");
    } catch (err) {
      message.reply("The command could not be processed.");
    }
  }
}