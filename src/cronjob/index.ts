import { Client, TextChannel } from 'discord.js'
import { schedule } from 'node-cron'
import { ScheduledMessage } from '../types'

export default async (client: Client, scheduledMessages: Array<ScheduledMessage>) => {
  scheduledMessages.forEach((f) => {
    schedule(f.cron, async () => {
      const guild = client.guilds.cache.find((g) => g.name === f.guildName)
      const channel = guild.channels.cache.find((c) => c.name === f.channelName) as TextChannel
      channel.send(f.message)
    })
  })
}
