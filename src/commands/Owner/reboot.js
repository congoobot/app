 const {MessageEmbed} = require("discord.js"); // [package required: discord.js]
module.exports = {
    name: 'reboot',
  enabled: true,
  guildOnly: false,
    aliases: ["reset", "yenile", "yenşden-başlat"],
    execute: async (client, message, args,  author, channel, guild ) => {
  if(message.author.id !== "IDNIZ") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
  // EMBED
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle("» Bot yeniden başlatılıyor...")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down
  
  console.log("Bot yeniden başlıyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}}