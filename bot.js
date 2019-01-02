const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!c7 "

client.on('ready',() => {
  console.log("I\'m Online! Ready to launch!");
  client.user.setActivity('!c7 help | discord.me/teamco7', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!c7 help | discord.gg/67gbBKH'}`))
    .catch(console.error);
})

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Bot support: \n !c7 help   > This message \n !c7 servers > Displays TeamCo7 Clan servers \n Note: This bot is still in BETA version! \n In case of DDoS hack, wait for response! \n Bot language: discord.js (javascript)');
  	}
    if (message.content.startsWith(prefix + 'servers')) {
  		message.channel.send('⚠️ This command still has to be set up!');
  	}
    if (message.content.startsWith(prefix + 'about')) {
    message.channel.send({embed: { "plainText": "", "title": "About TeamCo7 Clan Bot", "description": "Hi! I\'m a bot that\'s serving: \n • TeamCo7 Clan members \n • Allied clans or communities", "color": 53380 }});
    }

});
//
client.login(process.env.BOT_TOKEN);
