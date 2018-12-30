const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!c7 "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('!c7 help | discord.gg/67gbBKH', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!c7 help | discord.gg/67gbBKH'}`))
    .catch(console.error);
})

client.on('message', message => {

  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Bot usage: \n !c7 ping - pong \n !c7 help - help message \n This bot is still in BETA version by TeamCo7 Clan!  \n Join gaming DiscordApp server: https://discord.gg/67gbBKH /n If our host gets DDoS hacked, then please stay calm and wait for response from TeamCo7 Clan');
  	}
});
//  TeamCo7 bot has been changed(updated) and hopefully now works delete this comment when you changed the code and your are not TheBestGamerYT also tell TheBestGamerYT here or on discord what you changed(in case you changed something) for keeping track on developement nothing else :)

client.login(process.env.BOT_TOKEN);
