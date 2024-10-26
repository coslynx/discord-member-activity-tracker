const { Client, IntentsBitField } = require('discord.js');
const { Member } = require('../models/member');
const { Guild } = require('../models/guild');
const { createEmbed, updateEmbed } = require('../utils/embedUtils');
const { logger } = require('../utils/logger');

module.exports = {
  onGuildMemberUpdate: async (oldMember, newMember) => {
    try {
      // Get the guild's status channel ID
      const guild = await Guild.findOne({ guildId: newMember.guild.id });
      if (!guild) return;

      // Get the member's new status
      const newStatus = newMember.presence.status;

      // Update the member's status in the database
      await Member.findOneAndUpdate(
        { discordId: newMember.id },
        { status: newStatus },
        { upsert: true },
      );

      // Update the member's status embed
      const statusChannel = await newMember.guild.channels.fetch(guild.statusChannelId);
      if (!statusChannel) return;

      // Get the member's current status embed
      const embeds = await statusChannel.messages.fetch({ limit: 10 });
      const embedToUpdate = embeds.find((embed) => embed.author.name === newMember.user.username);

      if (embedToUpdate) {
        // Update existing embed
        await updateEmbed(statusChannel, embedToUpdate, newMember, newStatus);
      } else {
        // Create a new embed
        await createEmbed(statusChannel, newMember, newStatus);
      }
    } catch (error) {
      logger.error('Error handling guildMemberUpdate:', error);
    }
  },
};