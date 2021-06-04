import { ScheduledMessage } from '../types'

const jobs: Array<ScheduledMessage> = [
  {
    message: '10 sec message',
    guildName: 'Teresa',
    channelName: 'ogeday26',
    cron: '*/10 * * * * *'
  }
]

export default jobs
