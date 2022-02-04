//WARQETY YOUTUBE KANALIN AIT SUPERVISORDUR BU\\


// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ

const { Client, MessageEmbed, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const { readdir } = require("fs");
const config = require("./config.json");
const ayarlar = require("./WarQety.json");
const db = require("quick.db");
const moment = require('moment');
const ms = require("ms");
require("moment-duration-format");
const buttons = require('discord-buttons');
buttons(client)
const önerilimit = new Map()
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];
let qdb = require("quick.db");
let sunucuayarDB = new qdb.table("sunucuayar");
let rolAyarlarDB = new qdb.table("rolayarlar");
let prefixDB = new qdb.table("prefix");
let profilDB = new qdb.table("profil");
let guvenliKisiDB = new qdb.table("guvenlikisi");
let sesdb = new qdb.table("stats");
let cezaDB = new qdb.table("cezalar");
let inviteDB = new qdb.table("invitemanager");
let danger = false

// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
    if (err) console.error(err)
    files.forEach(f => {
        readdir("./src/commands/" + f, (err2, files2) => {
            if (err2) console.log(err2)
            files2.forEach(file => {
                let prop = require(`./src/commands/${f}/` + file);
                console.log(`[WARQETY-COMMAND] ${prop.name} yüklendi!`);
                commands.set(prop.name, prop);
                prop.aliases.forEach(alias => {
                    aliases.set(alias, prop.name);
                });
            });
        });
    });
});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
readdir("./src/events", (err, files) => {
    if (err) return console.error(err);
    files.filter((file) => file.endsWith(".js")).forEach((file) => {
        let prop = require(`./src/events/${file}`);
        if (!prop.conf) return;
        client.on(prop.conf.name, prop)
        console.log(`[WARQETY-EVENT] ${prop.conf.name} yüklendi!`);
    });
});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
client.on("message", async message => {
    if (message.content === "!buton-rol" && message.author.id === config.bot.owner) {
        const Giveaway = new buttons.MessageButton()
            .setStyle("red")
            .setLabel("🎁 Çekiliş Katılımcısı")
            .setID("Giveaway");
        const Activity = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("🎉 Etkinlik Katılımcısı")
            .setID("Activity");

        message.channel.send(`Merhaba!
 
Çekiliş Katılımcısı alarak **nitro, spotify, netflix ve benzeri çekilişlere katılıp ödül sahibi** olabilirsiniz.

Aşağıda bulunan butonlardan **Etkinlik Katılımcısı alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

\`NOT:\` Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.
\n\n\n
**WarQety ve SAI ekibiyle Botumuzu Sunarız**`,
            {
                buttons: [Giveaway, Activity]
            });
    }
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
    if (message.content === "!buton-bilgi" && message.author.id === config.bot.owner) {

        const one = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("I")
            .setID("one");

        const two = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("II")
            .setID("two");

        const three = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("III")
            .setID("three");

        const four = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("IV")
            .setID("four");

        const five = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("V")
            .setID("five");
      message.channel.send 
      ("**Merhaba!** \n\n Aşşağıdaki butonlarla etkileşime girerek **sunucumuzdaki durumunuz hakkında bilgi edinebilirsiniz.** \n\n **1 -** `Sunucumuza daha önceden hangi isimlerle kayıt olduğunuzu kontrol edersiniz.` \n **2 -** `Sunucumuza daha önceden kayıt olup olmadığınızı kontrol edersiniz.` \n **3 -** `Sunucumuzda daha önceden ceza alıp almadığınızı kontrol edersiniz.` \n **4 -** `Sunucumuzdaki rollerinizi kontrol edersiniz.` \n **5 -** `Sunucumuza ne zaman katıldığınızı kontrol edersiniz.` \n\n\n **WARQETY VE SAI EKIBI İLE KULLANICI PANELINI SUNARIZ**", { buttons: [one, two, three, four, five] })
    }
});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
client.login(process.env.token).then(x => console.log(`Bot ${client.user.username} olarak giriş yaptı!`)).catch(err => console.log(`Bot Giriş yapamadı sebep: ${err}`));

client.on('message', async message => {
if (message.content === 'fakekatıl') { 
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ//KOMUTLAR


client.on("messageDelete", async (message) => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    let snipe = {
        mesaj: message.content,
        mesajyazan: message.author.id,
        ytarihi: message.createdTimestamp,
        starihi: Date.now(),
        kanal: message.channel.id
    }
    await db.set(`snipe.${message.guild.id}`, snipe)
});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
 
const Activites = new Map();
client.on("voiceStateUpdate", async (oldState, newState) => {
  let stats_week = new qdb.table("stats_week")
  let stats_daily = new qdb.table("stats_daily")
  let stats_two_week = new qdb.table("stats_two_week")
  let stats_three_week = new qdb.table("stats_three_week")
  let stats_month = new qdb.table("stats_month")
  if((oldState.member && oldState.member.user.bot) || (newState.member && newState.member.user.bot)) return;
  if(!oldState.channelID && newState.channelID) { // Kanala Girince
      Activites.set(oldState.id, Date.now());
  }
  let data;
  if(!Activites.has(oldState.id)){
      data = Date.now();
      Activites.set(oldState.id, data); 
    }
  else
      data = Activites.get(oldState.id);
  let duration = Date.now() - data;
  if(oldState.channelID && !newState.channelID) { // Kanaldan Ayrılınca
      Activites.delete(oldState.id);
      if (oldState.channelID === await sunucuayarDB.get(`sunucuayar.sleep_kanal`)) return await sesdb.add(`sleep_room.${oldState.guild.id}.${oldState.id}.${await sunucuayarDB.get(`sunucuayar.sleep_kanal`)}`, duration);
      // GENEL
      await sesdb.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
      await sesdb.add(`stats.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
    
    // GÜNLÜK
      await stats_daily.add(`stats_daily.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_daily.add(`stats_daily.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // HAFTALIK
      await stats_week.add(`stats_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_week.add(`stats_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // 2 HAFTALIK
      await stats_two_week.add(`stats_two_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_two_week.add(`stats_two_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // 3 HAFTALIK
          await stats_three_week.add(`stats_three_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_three_week.add(`stats_three_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // 1 AY
      await stats_month.add(`stats_month.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_month.add(`stats_month.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
  }
  else if(oldState.channelID && newState.channelID){ // Kanal değiştirince
        Activites.set(oldState.id, Date.now());
        if (newState.channelID === await sunucuayarDB.get(`sunucuayar.sleep_kanal`) || oldState.channelID === await sunucuayarDB.get(`sunucuayar.sleep_kanal`)) return await sesdb.add(`sleep_room.${oldState.guild.id}.${oldState.id}.${await sunucuayarDB.get(`sunucuayar.sleep_kanal`)}`, duration);
        // GENEL
    await sesdb.add(`stats.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
      await sesdb.add(`stats.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);

      // GÜNLÜK
      await stats_daily.add(`stats_daily.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_daily.add(`stats_daily.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // HAFTALIK
      await stats_week.add(`stats_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_week.add(`stats_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);
    // 2 HAFTALIK
      await stats_two_week.add(`stats_two_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_two_week.add(`stats_two_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // 3 HAFTALIK
      await stats_three_week.add(`stats_three_week.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_three_week.add(`stats_three_week.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

      // 1 AY
      await stats_month.add(`stats_month.${oldState.guild.id}.${oldState.id}.category.${oldState.channel.parentID}`, duration);
      await stats_month.add(`stats_month.${oldState.guild.id}.${oldState.id}.channels.${oldState.channelID}`, duration);

  }
})

client.on("message", async (msg) => {
  let mstats_week = new qdb.table("mstats_week")
  let mstats_daily = new qdb.table("mstats_daily")
  let mstats_two_week = new qdb.table("mstats_two_week")
  let mstats_three_week = new qdb.table("mstats_three_week")
  let mstats_month = new qdb.table("mstats_month")
  if (!msg.guild || msg.author.id === client.user.id) return;
  if (msg.author.bot) return
 
    await sesdb.add(`message.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);
  await mstats_daily.add(`message_daily.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);
  await mstats_week.add(`message_week.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);
  await mstats_two_week.add(`message_two_week.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);
  await mstats_three_week.add(`message_three_week.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);
  await mstats_month.add(`message_month.${msg.guild.id}.${msg.author.id}.channels.${msg.channel.id}`, 1);

});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
 client.on('message', async (msg, member) => {



    if (msg.content === 'sa') {

        msg.reply('Aleyküm Selam Hoşgeldin ');
    }

    if (msg.content === 'sea') {

        msg.reply('Aleyküm Selam Hoşgeldin ');
    }

    if (msg.content === 'hi') {

        msg.reply('Hi welcome ');
    }


});
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
const Discord = require("discord.js");
client.on("message", async message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) return;
    if (config.önerilimit > 0 && önerilimit.has(message.author.id) && önerilimit.get(message.author.id) == config.önerilimit) return message.channel.send("Saatlik öneri limitine ulaştın!");
    message.channel.send("Önerin başarıyla sunucu yetkililerine iletildi! Bir dahaki önerini 1 saat sonra yapabileceksin.")
  client.channels.cache.get(config.logkanal).send(new Discord.MessageEmbed().setAuthor("Yeni bir öneri geldi!", client.user.avatarURL()).setFooter("WarQety ♥ SAIUGUR").setDescription(`**Gönderenin Bilgileri:** ${message.author} - ${message.author.id}`).setTimestamp().addField("**Mesaj**", message.content).setColor("RANDOM"))
    if (1 > 0) {
        if (!önerilimit.has(message.author.id)) önerilimit.set(message.author.id, 1);
        else önerilimit.set(message.author.id, önerilimit.get(message.author.id) + 1);
        setTimeout(() => {
            if (önerilimit.has(message.author.id)) önerilimit.delete(message.author.id);
        }, 1000 * 60 * 60)
    };
})
// WQWQW   WQW  WQWQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW     WQWQWWQWQWQWQW WQWQWWQWQWQWQW WQWQWWQWQWQWQW  WQ     WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ        WQ   WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW      WQW     WQ          WQ WQ                    WQ         WQ WQ       
// WQWQW   WQW  WQWQW  WQWQWWQWQWWQWQ WQWQWWQWQWWQWQ     WQ          WQ WQWQWWQWQWQWQW        WQ         WQWQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW       WQW    WQ          WQ WQ                    WQ         WQ
// WQWQW   WQW  WQWQW  WQWQW      WQW WQWQW        WQW   WQ          WQ WQ                    WQ        WQ
// WQWQWWQWQWWQQWQWQW  WQWQW      WQW WQWQW         WQW  WQWQWWQWQWQWQW WQWQWWQWQWQWQW        WQ      WQ
//                                                       WQ
