const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'idle', 'dnd'],
    default: 'offline',
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = { Member };