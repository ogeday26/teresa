import { Message } from 'discord.js'

export default {
  key: 'clear',
  description: 'Clear command',
  method: async (message: Message, command: string, args: Array<string>) => {
    try {
      if (message.guild.ownerID !== message.author.id) {
        message.reply('Only the server owner can do this.')
        return
      }

      if (args[0] && !Number.isNaN(+args[0]) && typeof +args[0] === 'number' && message.channel.type === 'text') {
        message.channel.bulkDelete(+args[0])
        return
      }
      message.reply('Parameter error.')
    } catch (err) {
      message.reply('The command could not be processed.')
    }
  }
}
