const { Client, IntentsBitField } = require('discord.js');
const { logger } = require('../utils/logger');

module.exports = {
  handleCommand: async (message, commandName, args) => {
    try {
      // Get the command from the client's command collection
      const command = message.client.commands.get(commandName);

      // If the command exists, execute it
      if (command) {
        try {
          await command.execute(message, args);
        } catch (error) {
          logger.error(`Error executing command ${commandName}:`, error);
          await message.reply('There was an error executing that command!');
        }
      } else {
        // If the command doesn't exist, send an error message
        await message.reply('That command doesn\'t exist!');
      }
    } catch (error) {
      logger.error('Error handling command:', error);
      await message.reply('There was an error handling that command!');
    }
  },
};