 const Discord = require("discord.js")
const config = require("../../../config.json");
module.exports = {
    name: "tagtara",
    aliases:['tagtara'],
    execute: async(client, message, args, embed) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('yetkin yok')
  
    let tag = config.registration.GuilDTag
    let tagrol = config.roles.team

    let taglılar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(tagrol))
    let tagsızlar = message.guild.members.cache.filter(s => !s.user.username.includes(tag) && s.roles.cache.has(tagrol))

    taglılar.array().forEach((warqety, index) => {
        setTimeout(async() => {
            warqety.roles.add(tagrol)
        }, index * 1000)

    })
    tagsızlar.array().forEach((warqety, index) => {
        setTimeout(async() => {
            warqety.roles.remove(tagrol)
        }, index * 1000)
    })
    message.channel.send(embed.setDescription(`**${taglılar.size}** Kullanıcıya taglı rolü verilecek.\n **${tagsızlar.size}** Kullanıcıdan taglı rolü alınacak.`).setFooter(config.bot.footer))

    }
}
