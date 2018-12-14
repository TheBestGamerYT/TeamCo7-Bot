const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Sorry, this unindependent bot is currently still under development by FinalSquad Company, under the authority of Parent Organization: TeamCo7 Gaming Clan! Contact FinalSquad Staff, Admins, Developers, CEO or Board of Directors for more i formation concerning our developmens! You can also apply!');
 	}
});

// 
client.login(process.env.BOT_TOKEN);
