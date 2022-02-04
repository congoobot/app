const { MessageEmbed } = require("discord.js");
const config = require("../../../config.json")
module.exports = {
    name: 'say',
    aliases: ["sayy", "sayı"],
    execute: async (client, message, args, embed, author, channel, guild) => {
       if (!message.member.roles.cache.has(config.registration.staff) && !message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı"));
        var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
    var Kayıtlı = message.guild.members.cache.filter(kayıt => !kayıt.roles.cache.has(config.registration.unregistered)).size;
    var Taglı = message.guild.members.cache.filter(u => u.user.username.includes(config.registration.GuilDTag)).size;
    var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
    var Cezalı = message.guild.members.cache.filter(y => y.roles.cache.has(config.penals.jail.roles)).size;
    var Muteli = message.guild.members.cache.filter(j => j.roles.cache.has(config.penals.mute.roles)).size;
    var Yetkili = message.guild.members.cache.filter(b => b.roles.cache.has(config.registration.staff)).size;


        message.channel.send(new MessageEmbed().setFooter("SAIUGUR", message.guild.iconURL).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(`
\` > \` Sunucumuzda toplam \`${message.guild.memberCount}\` (\`${Online} Aktif\`) kullanıcı bulunmaktadır.
\` > \` Sunucumuzda toplam \`${Kayıtlı}\` kayıtlı kullanıcı bulunmaktadır.
\` > \` Ses kanallarında toplam \`${Voice}\` kullanıcı bulunmaktadır.
\` > \` Sunucumuzda toplam \`${Cezalı}\` cezalı, \`${Muteli}\` muteli kullanıcı bulunmaktadır.
\` > \` Sunucumuzda toplam \`${Yetkili}\` yetkili kullanıcı bulunmaktadır.
\` > \` Sunucumuzda isminde ${config.registration.GuilDTag} tagını bulunduran toplam \`${Taglı}\` kullanıcı bulunmaktadır.
    `))
      
    }
}