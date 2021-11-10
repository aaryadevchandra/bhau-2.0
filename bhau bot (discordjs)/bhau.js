// Require the necessary discord.js classes
const { Client, Intents, User } = require('discord.js');
const { token } = require('./config.json');
const BOT_CMD = ".";
const mongoose = require('mongoose');
const roastModel = require('./roast-schema')


// mongoose functions

const mongooseInit = async() => { 
	const dbURI = 'mongodb+srv://Aaryadev:aurora1127@cluster0.jvar5.mongodb.net/bhau-cluster?retryWrites=true&w=majority';
	try{
		await mongoose.connect(dbURI);
		let roastString = await getRandomRoast();
		return roastString;
	}catch(e){
		console.log(e);
	}
	
}	

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomRoast = async() => {
	try{
		let mongoData = await roastModel.find(); // mongoData is a list of objects containing roasts
		return mongoData[getRandomInt(0, mongoData.length)].Roast;
	}
	catch(e){
		console.log(e);
	}
}

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`${client.user.tag}`);
});

client.on('messageCreate', (message) => {

	//checking if message starts with command
	if(message.content.startsWith(BOT_CMD)) {
		if ( message.content.split(" ").at(0) === '.kick' ){
				//if there's one mention in message.content
				if (message.mentions.users.at(0) != undefined){
				//all good
				for(let i = 0; i < message.mentions.members.size; i++) {
					var memberToKickId = message.mentions.users.at(i).id;
					var user = new User(client, {
						id: memberToKickId
					})
					message.guild.members.kick(user);
					message.reply('User was kicked, sire');
				}
			}
			else message.reply('Invalid args');
		}
		else if(message.content.split(" ").at(0) === '.bhau'){
			let words = message.content.split(" ");
			try{
				if(message.mentions.users.at(1)!= undefined){
					message.reply('Please pass one argument');
				}
				else if(message.mentions.users.at(0)!=undefined){
						mongooseInit().then(roastString=>{
						message.reply(`${roastString} ${message.mentions.users.first()}`);
					});
				}
				else{
					message.reply(`Couldn't roast ${words[1]}...they were just too powerful`);
				}
				
			}catch(e){
				console.log(e);
			}
		}
		else if(message.content.split(" ").at(0) === '.sm'){
			if (message.mentions.users.at(0) != undefined){
				for(let i = 0; i < message.mentions.members.size; i++)  {
					console.log( 'running server mute : '+ message.mentions.members.at(i).voice.channelId );
					if (message.mentions.members.at(i).voice.channelId != null ) {
						try{message.mentions.members.at(i).voice.setMute(true);}
						catch(e){
							console.log(e);
							message.reply('Error performing the mute operation');}	
					}	
					else message.reply('User needs to be connected to a voice channel');
				}
			}
			else message.reply('Invalid args');
		}
		else if(message.content.split(" ").at(0) === '.sd'){
			if (message.mentions.users.at(0) != undefined){
				for(let i = 0; i < message.mentions.members.size; i++)  {
					console.log( 'running server mute : '+ message.mentions.members.at(i).voice.channelId );
					if (message.mentions.members.at(i).voice.channelId != null) {
						try{message.mentions.members.at(i).voice.setDeaf(true);}
						catch(e){
							console.log(e);
							message.reply('Error performing the deafen operation');}
					}
					else message.reply('User needs to be connected to a voice channel');
				}
			}
			else message.reply('Invalid args');
		}
	}
});

// Login to Discord with your client's token
client.login(token);
