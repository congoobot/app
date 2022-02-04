 const db = require('quick.db')
const Discord = require('discord.js')
const config = require("../../../config.json");

module.exports = {
    name: "toplantıçağır",
            aliases: ["toplantıçağır"],
  


     execute: async (client, message, args, guild, author, channel, MessageEmbed) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return
        let enAltYetkiliRolü = message.guild.roles.cache.get(config.registration.staff);
        let yetkililer = message.guild.members.cache.filter(uye => !uye.user.bot && uye.roles.highest.position >= enAltYetkiliRolü.position && uye.presence.status !== "offline" && !uye.voice.channel).array();
        if (yetkililer.length == 0) return message.reply('Aktif olup, seste olmayan yetkili bulunmuyor. Maşallah!');
        let mesaj = await message.channel.send(`**${yetkililer.length}** yetkiliye sese gelme çağırısı yapılıyor`);
        var filter = m => m.author.id === message.author.id && m.author.id !== client.user.id && !m.author.bot;
            yetkililer.forEach((yetkili, index) => {
              setTimeout(() => {
                yetkili.send(message.guild.name+' SAIUGUR Sunucusunda toplantı başladı. Yetkili olduğun halde toplantıda değilsin. Eğer toplantıya girmezsen yetkilerin alınacaktır.').then(x => mesaj.edit(new Discord.MessageEmbed().setDescription(`${yetkili} yetkilisine özelden mesaj atıldı!`).setColoro(message.member.displayHexColor))).catch(err => message.channel.send(`${yetkili}, SAIUGUR Sunucusunda toplantı başladı. Yetkili olduğun halde toplantıda değilsin. Eğer toplantıya girmezsen yetkilerin alınacaktır.`).then(x => mesaj.edit(new Discord.MessageEmbed().setDescription(`${yetkili} yetkilisine özelden mesaj atılamadığı için kanalda etiketlendi!`).setColor(message.member.displayHexColor))));
              }, index*1000);
            });
    }}