const { Client, IntentsBitField } = require('discord.js');
const { Member } = require('../models/member');
const { Guild } = require('../models/guild');
const { createEmbed, updateEmbed } = require('../utils/embedUtils');
const { logger } = require('../utils/logger');

module.exports = {
  onReady: async (client) => {
    try {
      // Log a message to the console indicating the bot is ready
      logger.info(`Logged in as ${client.user.tag}!`);

      // Fetch all guilds the bot is in
      const guilds = await client.guilds.fetch();

      // Iterate through each guild
      for (const guild of guilds.values()) {
        try {
          // Find or create a guild document in the database
          const guildDoc = await Guild.findOneAndUpdate({ guildId: guild.id }, { guildId: guild.id }, { upsert: true });

          // Fetch all members in the guild
          const members = await guild.members.fetch();

          // Iterate through each member and update their status in the database
          for (const member of members.values()) {
            const newStatus = member.presence.status;
            await Member.findOneAndUpdate(
              { discordId: member.id },
              { discordId: member.id, username: member.user.username, status: newStatus },
              { upsert: true },
            );
          }

          // Get the guild's status channel ID
          const statusChannel = await guild.channels.fetch(guildDoc.statusChannelId);

          // If a status channel is configured, create or update embeds for all members
          if (statusChannel) {
            const members = await Member.find({ guildId: guild.id });

            // Iterate through each member and create or update their status embed
            for (const member of members) {
              const discordMember = await guild.members.fetch(member.discordId);
              const newStatus = discordMember.presence.status;

              // Update the member's status in the database
              await Member.findOneAndUpdate(
                { discordId: member.discordId },
                { status: newStatus },
                { upsert: true },
              );

              const embeds = await statusChannel.messages.fetch({ limit: 10 });
              const embedToUpdate = embeds.find((embed) => embed.author.name === discordMember.user.username);

              if (embedToUpdate) {
                // Update existing embed
                await updateEmbed(statusChannel, embedToUpdate, discordMember, newStatus);
              } else {
                // Create a new embed
                await createEmbed(statusChannel, discordMember, newStatus);
              }
            }
          }
        } catch (error) {
          logger.error(`Error setting up status channel for guild ${guild.id}:`, error);
        }
      }
    } catch (error) {
      logger.error('Error in ready event:', error);
    }
  },
};