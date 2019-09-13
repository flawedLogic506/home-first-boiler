const {model, Schema} = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  createdAt: String,
  house: {
    type: Schema.Types.ObjectId,
    ref: 'houses'
  }

});

module.exports = model('User', userSchema);