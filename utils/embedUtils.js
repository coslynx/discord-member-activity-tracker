const { MessageEmbed } = require('discord.js');

const createEmbed = async (channel, member, status) => {
  try {
    const embed = new MessageEmbed()
      .setColor('#0072ff')
      .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
      .setDescription(`Status: ${status}`);

    await channel.send({ embeds: [embed] });
  } catch (error) {
    console.error('Error creating embed:', error);
  }
};

const updateEmbed = async (channel, embed, member, status) => {
  try {
    embed.setDescription(`Status: ${status}`);
    await embed.edit({ embeds: [embed] });
  } catch (error) {
    console.error('Error updating embed:', error);
  }
};

module.exports = { createEmbed, updateEmbed };