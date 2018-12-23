
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!c7 "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('!c7 is prefix', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!c7 is prefix'}`))
    .catch(console.error);
})

client.on('message', message => {

  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Welcome to a help page ! \n !c7 ping - pong \n !c7 help - help page \n This bot still under development by TeamCo7 Developments (restricted server)!  \n Join public gaming Discord server: https://discord.gg/67gbBKH');
  	}
});
// My version changed and hopefully now works delete this comment when you changed the code and your are not TheBestGamerYT

    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// 

client.login(process.env.BOT_TOKEN);
