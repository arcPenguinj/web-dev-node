const mongoose = require('mongoose');
const schema = mongoose.Schema({
  icon: String,
  userName: String,
  handle: String,
  time: String,
  tweet: String,
  extra: {
      image: String,
      title: String,
      content: String,
      url: String
  },
  comment: Number,
  retweet: Number,
  like: Number,
  liked: Boolean
}, {collection: "tweets"});
module.exports = schema;
