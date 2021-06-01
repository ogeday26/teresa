import { Client } from "discord.js";

export default {
  event: "ready",
  method: (client: Client) => {
    return async function (): Promise<void> {
      try {
        console.log("Ready...");
      } catch (err) {
        console.log(err);
      }
    }
  }
}