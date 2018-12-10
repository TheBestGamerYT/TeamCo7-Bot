const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('!help discord.gg/67gbBKH, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!help discord.gg/67gbBKH'}`))
    .catch(console.error);

});



client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong! This bot still under development by TeamCo7 Developments (restricted server)! Join public gaming Discord server: https://discord.gg/67gbBKH');
  	}
});

//
client.login(process.env.BOT_TOKEN);
