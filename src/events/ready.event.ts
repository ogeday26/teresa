import { Client } from 'discord.js'

export default {
  event: 'ready',
  method: (client: Client) => async function (): Promise<void> {
    try {
      console.log('Ready...')
    } catch (err) {
      console.log(err)
    }
  }
}
