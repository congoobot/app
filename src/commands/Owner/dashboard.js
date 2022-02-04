const Discord = require("discord.js");
const config = require("../../../config.json");
const db = require("quick.db");
module.exports = {
    name: "dashboard",
    aliases: ["dashboard","dbh"],
    execute: async (client, message, args) => {
    message.channel.send(new Discord.MessageEmbed().setTitle("WarQety ♥ SAIUGUR").setColor("RED").setDescription(`
    Sunucuda toplam **•** **${message.guild.memberCount}** Üye
    Son 1 **Saatte** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}**
    Son 1 **Günde** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}**
    Son 1 **Haftada** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}**
    Son 1 **Ayda** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(client.config.footer, message.guild.iconURL())
    .setTimestamp()).then(x => x.delete({ timeout: 5000 }))
    message.react(config.onayemoji)
  }
}