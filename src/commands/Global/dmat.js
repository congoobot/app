 const Discord = require('discord.js');
module.exports = {
    name: "dmat",
  enabled: true,
  guildOnly: true,
    aliases:  ['dmat'],
    execute: async (client, message, args, author, channel, guild) => {

    if (message.author.id === "IDNIZ") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Merhaba Sana Birisinden DM Var!')
    .addField('DM Atan :', `➽ <@${message.author.id}>`)
    .addField('DM İse :', `➽ ${dm}`)
    .setFooter('WarQety')
    dmkisi.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Wasley')
    message.channel.send(dmtamam);
    } else {
        message.channel.send(':x: **Bu Komutu Sadece Yapımcım Kullanabilir!**');
    }
}}