 const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "oylama",
    aliases: ['anket'],
    execute: async (client, message, args, embed, author, channel, guild) => {
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send(
     new Discord.MessageEmbed()
     .setColor("BLUE")
     .setDescription(` Yazı yazman gerek.`)).then(m => m.delete(5000));
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("BLUE")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('SAIUGUR', client.user.displayAvatarURL())
       .addField(`**Oylama:**`, `**${question}**`)).then(function(message) {
         message.react('✅');
         message.react('❌');
       });
     }
  }