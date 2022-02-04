 const { MessageEmbed } = require('discord.js');
const config = global.config;
module.exports = {
    name: 'help',
    aliases: ["yardım","h","y"],
    execute: async (client, message, args, embed, author, channel, guild ) => {

   message.channel.send(new MessageEmbed().setFooter("SAIUGUR", message.guild.iconURL).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(`
-----Global-----                                         
.afk [sebep]
.avatar \`@etiket/ID\`
.cihaz
.spotify
.ping
.yardım
.top10
.stat
.songörülme

----Owner------
.yetkibaşlat
.oylama
.çekiliş
.dashboard
.ekip
.ekipp
.eval
.herkeserolver
.reklamtarama
.seslisay
.yetkilisay
.taglıalım
.vip
.musician
.sponsor
.tagges
.tasarımcı
.katıldı
.toplantıçağır
------Yönetim---------
.ytbaşlat
.ytal
.ytatlat1
.ytatlat2
.ytatlat3
.ytatlat4
.ytatlat5

-----Moderasyon-----
.rolsüz
.ban
.mute
.jail
.sesli
.snipe
.yaşortalaması
.sil
.kilit
.tagtara
.tagaldı
.tagliste
.nerede
.say
.ses kes
.sicil sıfırla
.warn
.unban
.unmute
.unjail
.erkek
.kadın
.isim
.unregistered
.banbilgi
.banlist
.isimler
.kayıtsayı
.kke
.top
.warns
.sicil
`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
            .setFooter('WarQety Yabdı')
        )
    }
}