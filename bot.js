const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

client.on('warn', console.warn);
client.on('error', console.error);

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
client.on('reconnecting', () => console.log('I am reconnecting now!'));

//// SHORTCUTS IN THE DISCORD.JAVASCRIPT CODE:
client.on('message', async msg => { // eslint-disable-line

	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

//// BOT PREFIX:
var prefix = "!"

//// CONSOLE & GAME ACTIVITY STATUS RESPONSE:
client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`c7!help | ${client.guilds.size} servers`);
});

//// HELP COMMAND (EMBED MESSAGE: https://embedbuilder.nadekobot.me/)
  	if (msg.content.startsWith(prefix + 'help')) {
      	msg.channel.send({embed: {
  "plainText": "Help Command",
  "title": "Commands: (usage: !<command>)",
  "color": 3447003,
  "footer": {
    "text": "© Copyright @teamco7clan",
    "icon_url": "https://cdn.discordapp.com/avatars/481540507479048203/6aaed6c31705efac5eb4906a9605ac14.png?size=2048"
  },
  "thumbnail": "",
  "fields": [
    {
      "name": "» Music",
      "value": "!play, !skip, stop, !volume, !np, !queue, !pause, !resume",
      "inline": false
    },
    {
      "name": "» Administration",
      "value": "-Development",
      "inline": false
    },
    {
      "name": "» Fun commands:",
      "value": "-Development",
      "inline": false
    },
    {
      "name": "» Information:",
      "value": "-Development",
      "inline": false
    }
    ]
    }
    });
    }

    //// MUSIC COMMANDS ////


    	if (command === 'play') {
    		const voiceChannel = msg.member.voiceChannel;
    		if (!voiceChannel) return msg.channel.send('Sorry, you need to be in a voice channel!');
    		const permissions = voiceChannel.permissionsFor(msg.client.user);
    		if (!permissions.has('CONNECT')) {
    			return msg.channel.send('Unable to enter voice channel! I need more permissions');
    		}
    		if (!permissions.has('SPEAK')) {
    			return msg.channel.send('I have no permission to speak in your voice channel, \nMake sure I have more permissions!');
    		}

    		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    			const playlist = await youtube.getPlaylist(url);
    			const videos = await playlist.getVideos();
    			for (const video of Object.values(videos)) {
    				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
    				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
    			}
    			return msg.channel.send(`✅ Playlist: **${playlist.title}** added to queue!`);
    	  	} else {
    			try {
    				var video = await youtube.getVideo(url);
    			} catch (error) {
    				try {
    					var videos = await youtube.searchVideos(searchString, 10);
    					let index = 0;
    					msg.channel.send(`
    __**Song selection:**__
    ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
    Please provide a value to select one of the search results ranging from 1-10.
    					`);
    					// eslint-disable-next-line max-depth
    					try {
    						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
    							maxMatches: 1,
    							time: 10000,
    							errors: ['time']
    						});
    					} catch (err) {
    						console.error(err);
    						return msg.channel.send('No or invalid value entered, cancelling video selection.');
    					}
    					const videoIndex = parseInt(response.first().content);
    					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
    				} catch (err) {
    					console.error(err);
    					return msg.channel.send('🆘 Unable, to find your search!');
    				}
    			}
    			return handleVideo(video, msg, voiceChannel);
    		}
    	} else if (command === 'skip') {
    		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    		if (!serverQueue) return msg.channel.send('There is nothing playing. Unable to skip');
    		serverQueue.connection.dispatcher.end('Skip command has been used!');
    		return undefined;
    	} else if (command === 'stop') {
    		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    		if (!serverQueue) return msg.channel.send('There is nothing playing. Unable to skip');
    		serverQueue.songs = [];
    		serverQueue.connection.dispatcher.end('Stop command already used!');
    		return undefined;
    	} else if (command === 'volume') {
    		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    		if (!serverQueue) return msg.channel.send('There is nothing playing.');
    		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
    		serverQueue.volume = args[1];
    		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    		return msg.channel.send(`I set the volume to: **${args[1]}**`);
    	} else if (command === 'np') {
    		if (!serverQueue) return msg.channel.send('There is nothing playing.');
    		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
    	} else if (command === 'queue') {
    		if (!serverQueue) return msg.channel.send('There is nothing playing.');
    		return msg.channel.send(`
    __**Song queue:**__
    ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
    **Now playing:** ${serverQueue.songs[0].title}
    		`);
    	} else if (command === 'pause') {
    		if (serverQueue && serverQueue.playing) {
    			serverQueue.playing = false;
    			serverQueue.connection.dispatcher.pause();
    			return msg.channel.send('⏸ Music paused!');
    		}
    		return msg.channel.send('There is nothing playing.');
    	} else if (command === 'resume') {
    		if (serverQueue && !serverQueue.playing) {
    			serverQueue.playing = true;
    			serverQueue.connection.dispatcher.resume();
    			return msg.channel.send('▶ Resumed the music!');
    		}
    		return msg.channel.send('There\'s no song playing.');
    	}

    	return undefined;
    });

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
    	const serverQueue = queue.get(msg.guild.id);
    	console.log(video);
    	const song = {
    		id: video.id,
    		title: Util.escapeMarkdown(video.title),
    		url: `https://www.youtube.com/watch?v=${video.id}`
    	};
    	if (!serverQueue) {
    		const queueConstruct = {
    			textChannel: msg.channel,
    			voiceChannel: voiceChannel,
    			connection: null,
    			songs: [],
    			volume: 5,
    			playing: true
    		};
    		queue.set(msg.guild.id, queueConstruct);

    		queueConstruct.songs.push(song);

    		try {
    			var connection = await voiceChannel.join();
    			queueConstruct.connection = connection;
    			play(msg.guild, queueConstruct.songs[0]);
    		} catch (error) {
    			console.error(`I could not join the voice channel: ${error}`);
    			queue.delete(msg.guild.id);
    			return msg.channel.send(`I could not join the voice channel: ${error}`);
    		}
    	} else {
    		serverQueue.songs.push(song);
    		console.log(serverQueue.songs);
    		if (playlist) return undefined;
    		else return msg.channel.send(`✅ **${song.title}** added to the music playlist!`);
    	}
    	return undefined;
    }

    function play(guild, song) {
    	const serverQueue = queue.get(guild.id);

    	if (!song) {
    		serverQueue.voiceChannel.leave();
    		queue.delete(guild.id);
    		return;
    	}
    	console.log(serverQueue.songs);

    	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    		.on('end', reason => {
    			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
    			else console.log(reason);
    			serverQueue.songs.shift();
    			play(guild, serverQueue.songs[0]);
    		})
    		.on('error', error => console.error(error));
    	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    	serverQueue.textChannel.send(`🎶 Started playing: **${song.title}** in your voice channel`);
    }

});
client.login(process.env.BOT_TOKEN);
