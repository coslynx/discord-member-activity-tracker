const { SlashCommandBuilder } = require('discord.js');
const { Member } = require('../models/member');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setstatus')
    .setDescription('Sets your custom status')
    .addStringOption((option) =>
      option
        .setName('status')
        .setDescription('Your custom status message')
        .setRequired(true),
    ),
  async execute(interaction) {
    const status = interaction.options.getString('status');

    try {
      await Member.findOneAndUpdate(
        { discordId: interaction.user.id },
        { status },
        { upsert: true },
      );

      await interaction.reply(`Your status has been updated to: ${status}`);
    } catch (error) {
      console.error('Error updating status:', error);
      await interaction.reply('There was an error updating your status.');
    }
  },
};