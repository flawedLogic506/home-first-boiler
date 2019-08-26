const {model, Schema} = require('mongoose');

const houseSchema = new Schema({
  members: [
    {
      username: String,
      password: String,
      email: String,
      createdAt: String
    }
  ],
  
});