const Twitter = require('twitter')
require('dotenv').config()

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const screenName = 'rrihapp'

const userParams = {screen_name: screenName, count:20};
const searchParams = {
    q: 'rrihapp',
    count: 1
}

// ツイート一覧取得
client.get('statused/user_timeline', userParams, function(error, tweets, response){
    if (!error) {
        console.log(tweets)        
    }
})

// 検索結果取得
client.get('search/tweets', searchParams, function(error, result, response){
    // const userInfo = tweets[0].user
    if (!error) {
        console.log(result)        
    }
});
