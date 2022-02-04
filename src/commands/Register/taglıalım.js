const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "taglıalım",
    aliases: ["taglıalım"],
    execute: async (client, message, args, author, channel, guild) => {
let no = "❌"; 
let yes = "✅";
let n = no;
let y = yes;

let embed = new Discord.MessageEmbed().setFooter("Wasley").setColor("RANDOM").setTimestamp();

if (!message.member.roles.cache.has("830411287137746964") && !message.member.hasPermission("ADMINISTRATOR")) return; //sahiprolu

if(!args[0]) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Komutu yanlış kullandınız! ${config.bot.prefix}taglıalım aç/kapat`)).then(x => x.delete({timeout: 5000}));
return;    
}
if (args[0] === "aç") {
if(db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten aktif!`)).then(x => x.delete({timeout: 5000}));
db.set(`taglıAlım.${message.guild.id}`, "taglıAlım")
message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Taglı alım sistemi aktif edildi!`)).then(x => x.delete({timeout: 5000}));
return;    
} else if (args[0] === "kapat") {
if(!db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten devre dışı!`)).then(x => x.delete({timeout: 5000}));
db.delete(`taglıAlım.${message.guild.id}`)
message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Taglı alım sistemi devre dışı bırakıldı!`)).then(x => x.delete({timeout: 5000}));
return;    
};

}
 }