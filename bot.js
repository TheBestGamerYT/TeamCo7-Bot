const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!c7 "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('!c7 help | discord.me/teamco7', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!c7 help | discord.gg/67gbBKH'}`))
    .catch(console.error);
})

client.on('message', message => {

  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong! I can\'t know the ping. I am still in BETA version \n Developers still have to complete this discord.js code');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Bot Help Message: \n !c7 ping - pong \n !c7 help - help message \n This bot is still in BETA version by TeamCo7 Clan!  \n If our host gets DDoS hacked, then please stay calm and wait for response from TeamCo7 Clan \n Discord server: https://discord.gg/67gbBKH');
  	}
});
//  
client.login(process.env.BOT_TOKEN);
