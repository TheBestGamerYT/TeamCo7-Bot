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
  	if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Bot help: \n ```!c7 help > This meesage \n !c7 servers > Displays TeamCo7 Clan servers ```\n Note: This bot is still in BETA version! \n In case of DDoS hack, wait for response from TeamCo7 Clan!');
  	}
    if (message.content.startsWith(prefix + 'servers')) {
  		message.channel.send('⚠️ This command still has to be set up!');
  	}
});
//  
client.login(process.env.BOT_TOKEN);
