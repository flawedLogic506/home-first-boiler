const {model, Schema} = require('mongoose');

const houseSchema = new Schema({
  houseNumber: Number,
  members: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ]
});

module.exports = model('House', houseSchema);