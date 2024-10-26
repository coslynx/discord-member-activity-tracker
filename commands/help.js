const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands'),
  async execute(interaction) {
    const commands = interaction.client.commands.map((command) => `${command.data.name} - ${command.data.description}`);
    await interaction.reply({
      content: `Here's a list of all my available commands:\n\n${commands.join('\n')}`,
    });
  },
};