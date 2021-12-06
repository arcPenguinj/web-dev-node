const dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {

  const findAllTweets = (req, res) =>
    dao.fetchAllTweets()
      .then(tweets => res.json(tweets));

  app.get('/api/tweets', findAllTweets);

  const postNewTweet = (req, res) =>
  {
    const newTweet = {
      "userName": "ReactJS",
      "handle": "ReactJS",
      "time": "2h",
      "icon": "/images/elon.jpeg",
      "comment": 123,
      "retweet": 234,
      "like": 345,
      "liked": false,
      "extra": {
        "image": "/images/starship.jpeg"
      },
      ...req.body,
    };
    dao.postNewTweet(newTweet);
    res.json(newTweet);
  }
  app.post('/api/tweets', postNewTweet);

  const deleteTweet = (req, res) => {
    const id = req.params['id'];
    dao.deleteTweet(id);
    res.sendStatus(200);
  }
  app.delete('/api/tweets/:id', deleteTweet);

  const likeTweet = (req, res) => {
    const id = req.params['id'];
    dao.findById(id).then(tweet => {
      if (tweet.liked === true) {
        tweet.liked = false;
        tweet.like--;
      } else {
        tweet.liked = true;
        tweet.like++;
      }
      dao.updateTweet(id, tweet).then(_ => res.sendStatus(200));
    });

  }
  app.put('/api/tweets/:id/like', likeTweet);
};
