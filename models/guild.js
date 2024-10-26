const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  statusChannelId: {
    type: String,
  },
});

const Guild = mongoose.model('Guild', guildSchema);

module.exports = { Guild };