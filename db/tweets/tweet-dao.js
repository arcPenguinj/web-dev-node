const model = require('./tweet-model');

const fetchAllTweets = () => model.find();
const deleteTweet = (id) =>
  model.deleteOne({_id: id});
const postNewTweet = (newTweet) =>
  model.create(newTweet);
const updateTweet = (id, tweet) =>
  model.updateOne({_id: id},
    {$set: tweet});
const findById = (id) => model.findById({_id: id});


module.exports = {
    fetchAllTweets,
    deleteTweet,
    postNewTweet,
    updateTweet,
    findById
}