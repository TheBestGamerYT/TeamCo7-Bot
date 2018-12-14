const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!c7 "
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('I am ready!');
    client.user.setActivity('! is prefix', { type: 'PLAYING' })
 .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '! is prefix'}`))
 .catch(console.error);
 });

client.on('message', msg => {
    if (msg.content.startsWith(prefix + 'ping')) {
        msg.channel.send(`Pong! \`${Date.now() - msg.createdTimestamp} ms\``);
  }
});

//
client.login(process.env.BOT_TOKEN);
