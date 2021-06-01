import { Message } from "discord.js";

export default {
  key: "help",
  description: "Help command",
  method: async (message: Message, command: string, args: Array<string>) => {
    try {
      const helpList = [
        `[${process.env.PREFIX}yardım]: komut listesini yazar. | Örnek !yardım`,
        `[${process.env.PREFIX}kayıt]: Sunucu kaydı gerçekleştirir. !kayıt <AD SOYAD> | Örnek: !kayıt halil safa sağlık`,
        `[${process.env.PREFIX}temizle]: Belirli sayıda mesajı temizlemek için kullanılır. !temizle <MESAJ SAYISI> | Örnek: !temizle 10`,
        `[${process.env.PREFIX}personel]: Personel durumunu gösterir. | Örnek: !personel`,
        // `[${process.env.PREFIX}podcast]: Podcast başlatmak ve bitirmek için kullanılır. !podcast <başlat|bitir> | Örnek: !podcast başlat`,
        // `[${process.env.PREFIX}join]: Ses odasına bot çağırmak için kullanılır. | Örnek: !join`,
        // `[${process.env.PREFIX}leave]: Ses odasındaki botu göndermek için kullanılır. | Örnek: !leave`,
        // `[${process.env.PREFIX}pause]: Çalan parçayı duraklatır. | Örnek: !pause`,
        // `[${process.env.PREFIX}skip]: Bir sonraki parçaya geçer. | Örnek: !skip`,
        // `[${process.env.PREFIX}stop]: Çalan parçayı durdurur. | Örnek: !stop`,
        // `[${process.env.PREFIX}clear-queue]: Kuyruğu temizler. | Örnek: !clear-queue`,
      ];
      message.reply(`\`\`\`cs\n${helpList.join("\n")}\`\`\``);
    } catch (err) {
      message.reply("Komut işlenemedi.");
    }
  }
}