import { Client } from 'discord.js'
import { MongoClient, Collection } from 'mongodb'
import { MessageType } from './types'

class Autosave {
  private client: Client;

  private mongoClient: MongoClient;

  constructor (client: Client) {
    this.client = client
    const { MONGODB_USER, MONGODB_PASS, MONGODB_HOST } = process.env
    const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}`
    this.mongoClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    })
  }

  async setup () {
    await this.mongoClient.connect()
    const database = this.mongoClient.db(process.env.MONGODB_DB)
    const messages: Collection<MessageType> = database.collection('messages')

    this.client.on('message', async (message) => {
      if (message.author.bot) return

      messages.insertOne(JSON.parse(JSON.stringify(message)))
    })
  }
}

export default Autosave
