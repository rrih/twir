const Twitter = require('twitter')
require('dotenv').config()

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const params = {screen_name: 'nodejs'};

client.get('statused/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    } else {
        console.log('hoge')
    }
});