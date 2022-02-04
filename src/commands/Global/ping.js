 const Discord = require("discord.js")
const config = require("../../../config.json");
const db = require('quick.db');
var prefix = config.bot.prefix;
module.exports = {
    name: "ping",
    aliases: ["ping"],
    execute: async (client, message, args, embedcik, author, channel, guild) => {
let embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**5 Saniye Bekleyiniz**")
.setFooter("Ping Sistemi")
.setTimestamp()
await message.channel.send(embed).then(x =>{
setTimeout(function(){
let yeniembed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription('Anlik ping durumu: **' + client.ws.ping + 'ms**') 
.setFooter("Ping Sistemi")
.setTimestamp()
x.edit(yeniembed)
},5000)
});
    
}

}