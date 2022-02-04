 const db = require('quick.db')
const Discord = require('discord.js')
const config = require("../../../config.json");

module.exports = {
  name: "0412",
  aliases: ["ekip(örnek 0412)"],
  execute: async (client, message, args, guild, author, channel, MessageEmbed) => {
    
    let rol = "ekip rol"
    let tag = "WQ"
    let etiket = "0412" // etiketi # siz yazin
    message.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    message.channel.send((`
Kullanıcı adında \`${tag}\` ve etiketinde \`#${etiket}\` bulunduran kullanıcılara rol veriliyor.
`))
}
}
