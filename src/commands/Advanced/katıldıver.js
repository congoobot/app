 const Discord = require("discord.js");
const config = require("../../../config.json");

module.exports = {
    name: "katıldıver",
    aliases: ["katıldıver"],
    execute: async (client, message, args, embed, author, channel, guild) => {

if (!message.member.hasPermission('ADMINISTRATOR')) return message.react(config.emojis.no)

if(!message.member.voice || message.member.voice.channelID != config.channels.meetingRoom) return; 
let üyeler = message.guild.members.cache.filter(member => member.roles.cache.has(config.roles.katıldıRole) && member.voice.channelID != config.channels.meetingRoom);
üyeler.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.remove(config.roles.katıldıRole).catch();
  }, index * 1250)
});

let katıldıverildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has(config.roles.katıldıRole) && !member.user.bot)
katıldıverildi.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.add(config.roles.katıldıRole).catch((err) => console.log(err));
  }, index * 1250)
});
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${katıldıverildi.size}** kadar kullanıcıya katıldı verdim, **${üyeler.size}** kadar kullanıcıdan ise aldım.`)).catch();
  
}}