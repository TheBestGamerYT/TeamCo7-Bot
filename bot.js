const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('b! is prefix', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'b! is prefix'}`))
    .catch(console.error);
})

var prefix = "!"

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Welcome to a help page ! \n b! ping - pong \n b! help - help page \n This bot still under development by TeamCo7 Developments (restricted server)!  \n Join public gaming Discord server: https://discord.gg/67gbBKH');
  	}
});
// My version changed and hopefully now works delete this comment when you changed the code and your are not TheBestGamerYT
client.login(process.env.BOT_TOKEN);
