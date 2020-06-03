require('dotenv').config();
const moment = require('moment');

/**
 * MYSQL requêtes controller
 */
const { Insert } = require('./db/request');

/**
 * DISCORD
 */
const Discord = require('discord.js');
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const client = new Client();
client.login(process.env.DISCORD_TOKEN);

// Bot connexion
client.on('ready', () => {
  console.log('Bot Discord connecté !');
});

// bot écoute message
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'chat') {
    const attachment = new MessageAttachment('https://img-9gag-fun.9cache.com/photo/ax9D12W_460swp.webp');
    msg.channel.send(attachment).catch(err => {
      console.error('Message attachment chat : ' + err);
    });
  }

  let author = msg.author.username;
  let date = moment().locale('fr').format('LLLL');
  let content = msg.content;
  // valeurs de la requête
  let array = [[content, author, date]];

  Insert(array);
});
