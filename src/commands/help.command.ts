import { Message } from 'discord.js'
import commands from './index'

export default {
  key: 'help',
  description: 'Help command',
  method: async (message: Message, command: string, args: Array<string>) => {
    try {
      const helpList = commands.map((f) => `[${process.env.PREFIX}${f.key}]: ${f.description}`)
      message.reply(`\`\`\`cs\n${helpList.join('\n')}\`\`\``)
    } catch (err) {
      message.reply('The command could not be processed.')
    }
  }
}
