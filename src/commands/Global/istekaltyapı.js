  const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "istekaltyapi",
  enabled: true,
    guildOnly: true,
    aliases: ["istek-altyapi", "istek", "istekkod", "kod"],
    execute: async (client, message, args, embedcik, author, channel, guild) => {
    let embed =  new MessageEmbed().setColor('RANDOM').setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }));

    let beta = args.splice(0).join(" ");
    if (!beta) return message.channel.send(embed.setDescription(`${message.author}, Eksik arguman kullandınız, \`Lütfen istek kodunuzu belirtiniz.\``));

    client.channels.cache.get("kanalid").send(embed.setDescription(beta)).then(x => x.react("<:onayla:851465207741415484>") && x.react("<:reddet:851465207719919626>"))

}}