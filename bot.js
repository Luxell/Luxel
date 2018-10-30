const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {
  console.log(` Bot Aktif ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content === prefix + 'yardim') {
    msg.channel.sendMessage('**Yardıma Hoşgeldin!**');
    msg.channel.sendMessage('**Yardım:Eğlence = !eglenceyardim**');
    msg.channel.sendMessage('**Yardım:Yetkili = !yetkiliyardim**');
  }
  if (msg.content === prefix + 'eglenceyardim') {
    msg.channel.sendMessage('**!aptal**');
	msg.channel.sendMessage('**!komiklaf**');
  }
  if (msg.content === prefix + 'yetkiliyardim') {
    msg.channel.sendMessage('**!botyapimci**');
	msg.channel.sendMessage('**!hakkimda**');
  }
  if (msg.content === prefix + 'botyapimci') {
    msg.channel.sendMessage('@Beni yapan kişi @Berke / Rahatsız Etmeyin#2655!');
  }
  if (msg.content === prefix + 'aptal') {
    msg.reply('**Ben Aptalim**');
  }
  if (msg.content === prefix + 'komiklaf') {
    msg.channel.sendMessage('**Havada uçan köpeğe ne denir? Hav-uç!**');
    msg.channel.sendMessage('**Havada uçan memeliye ne denir? Hostes!**');
  }
  if (msg.content === prefix + 'hakkimda') {
    msg.channel.sendMessage('**Beni @Berke / Rahatsız Etmeyin#2655 yapmıştır!**');
  }
});

client.login('NTA2NTE4ODgwMTE0NzA0Mzg2.DrjV2w.SxIzKqZHOr8u5Fycr0YBBisA96Y');