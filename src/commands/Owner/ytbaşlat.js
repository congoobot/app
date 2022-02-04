const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");

module.exports = {
    name: "yetkilibaşlat",
    enabled: true,
    guildOnly: true,
    aliases: ["ytbaşlat","yt-başlat","ytb"],
    execute: async (client, message, args, embed, author, channel,MessageEmbed) => {
      const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has("başlangıç kademesi rolü","başlangıç kademesi rolü","başlangıç kademesi rolü") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let salvouye = message.mentions.users.first()
if (!salvouye) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Yetkisi Başlatılacak kişiyi Etiketleyiniz`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(salvouye)


//KADEMELER
member.roles.add("başlangıç kademesi rolü"); //1. Yetkili Kademesi

//YETKİLER
member.roles.add("başlangıç kademesi rolü"); //1. Yetki     
      
      
let yetkialinmatarihi = moment(message.createdAt).format("LLLL")
let salvocode = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkin Başlatıldı**

• Yetki Alan: <@!${message.author.id}> \`${message.author.id}\`
• Yetki Verilen: <@!${member.id}> \`${member.id}\`
• Yetki Verilme Tarihi: \`${yetkialinmatarihi}\``)
    .setFooter(client.ayarlar.footer, message.guild.iconURL())
return message.channel.send(salvocode).then(m => m.delete({timeout: 10000}));
  
  
}
}