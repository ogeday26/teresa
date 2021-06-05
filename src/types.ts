export interface ScheduledMessage {
  message: string,
  guildName: string,
  channelName: string,
  cron: string
}

export enum Modules {
  AUTOSAVE = 'AUTOSAVE'
}
