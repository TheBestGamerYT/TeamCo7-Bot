const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "b! "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('b! is prefix', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'b! is prefix'}`))
    .catch(console.error);
})

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Welcome to a help page ! \n b! ping - pong \n b! help - help page');
  	}
  });
client.login(process.env.BOT_TOKEN);
