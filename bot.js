const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDgxNTQwNTA3NDc5MDQ4MjAz.Du820A.DGmgF_K3nQd16l4rolUfUL-AFA4); 
