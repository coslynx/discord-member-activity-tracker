const { Client, IntentsBitField } = require('discord.js');
const { handleCommand } = require('../utils/commandHandler');
const { logger } = require('../utils/logger');

module.exports = {
  onMessageCreate: async (message) => {
    if (message.author.bot) return;

    try {
      // Check if the message is a command
      if (message.content.startsWith('/')) {
        // Extract the command and arguments
        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        // Handle the command
        await handleCommand(message, commandName, args);
      }
    } catch (error) {
      logger.error('Error handling message:', error);
    }
  },
};