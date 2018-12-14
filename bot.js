const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Sorry, this unindependent bot is currently still under development by FinalSquad Company, under the authority of Parent Organization: TeamCo7 Gaming Clan! Contact FinalSquad: Staff, Admins, Developers, CEO or Board of Directors for more information regarding our developments! You can also apply! https://discord.gg/5wwCBEA');
 	}
});

// 
client.login(process.env.BOT_TOKEN);
