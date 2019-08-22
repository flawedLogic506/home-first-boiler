const {model, Schema} = require('mongoose');

const houseSchema = new Schema({
  members: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  
});