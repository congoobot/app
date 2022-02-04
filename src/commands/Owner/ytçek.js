const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");

module.exports = {
    name: "yetkial",
    enabled: true,
    guildOnly: true,
    aliases: ["ytal","yt-al"],
    execute: async (client, message, args, embed, author, channel,MessageEmbed) => {
      const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has("YETKİLİ ROL","YETKİLİ ROL","YETKİLİ ROL") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let salvouye = message.mentions.users.first()
if (!salvouye) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Yetkisi Alınacak Kişiyi Etiketleyiniz`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(salvouye)

 //KADEMELER
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ"); //3. Yetkili Kademesi buraları doldurmayı unutmayınız config kısmında ekli deildir
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ"); //2. Yetkili Kademesi
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");   //1. Yetkili Kademesi
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ"); //Yetki 
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");      
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");      
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
      
      
            
//YETKİLER
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ"); //3. Yetki
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ"); //2. Yetki
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");//1. Yetki
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");  //Yetki  ban   
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");  //Yetki   jail   
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");  //Yetki   mute vb yetkiler   
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");      
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");      
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");
member.roles.remove("TÜM ALINACAK ROLLERİ SIRAYLA GİRİNİZ");     
      
      
let yetkialinmatarihi = moment(message.createdAt).format("LLLL")
let salvocode = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkileri Alındı**

• Yetki Alan: <@!${message.author.id}> \`${message.author.id}\`
• Yetki Alınan: <@!${member.id}> \`${member.id}\`
• Yetki Alınma Tarihi: \`${yetkialinmatarihi}\``)
.setFooter("WarQety ❤ SAIUGUR", client.user.avatarURL({dynamic: true}))
return message.channel.send(salvocode).then(m => m.delete({timeout: 10000}));
  
  
}
}