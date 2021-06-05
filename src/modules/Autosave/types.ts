import { CollationDocument } from 'mongodb'
import { Message } from 'discord.js'

export interface MessageType extends Message, CollationDocument {}
