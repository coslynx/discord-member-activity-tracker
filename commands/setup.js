const { SlashCommandBuilder } = require('discord.js');
const { Guild } = require('../models/guild');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Sets up the channel for displaying member status')
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription('The channel where the member status embeds will be displayed')
        .setRequired(true),
    ),
  async execute(interaction) {
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
      return;
    }

    const channel = interaction.options.getChannel('channel');

    try {
      await Guild.findOneAndUpdate(
        { guildId: interaction.guild.id },
        { statusChannelId: channel.id },
        { upsert: true },
      );

      await interaction.reply(`Member status will now be displayed in ${channel}`);
    } catch (error) {
      console.error('Error setting up status channel:', error);
      await interaction.reply('There was an error setting up the status channel.');
    }
  },
};