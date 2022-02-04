const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
const moment = require("moment");
module.exports = {
    name: "unjail",
    aliases: ["unjail", "karantina-çıkart", "uj"],
    execute: async (client, message, args,  author, channel, guild) => {
    
let member = message.mentions.members.first()
if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir Üye Etiketle`))
let rol = await db.get(`roles.${member.id}`);
let nick = await db.get(`isim.${member.id}`)
member.roles.set(rol).catch(e => { });
member.setNickname(nick)

const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTimestamp()
      .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    .setFooter(client.ayarlar.footer, message.guild.iconURL())
      .setDescription(`${member} - ${member.id} kullanıcısı başarıyla ${message.author} tarafından jailden çıkartıldı!`)
message.channel.send(embed)
  
  message.guild.channels.cache.get(config.penals.jail.log).send(`${member} - ${member.id} kullancısının ${message.author} tarafından jailden çıkartıldı!`)
db.delete(`eskirolleri.${member.id} `);
db.delete(`isim.${member.id}`);
}}