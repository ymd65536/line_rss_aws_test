
//exports.handler = async (event, context, callback) => {
    const axios = require('axios');
    const xml2js = require('xml2js');
    const Line = require('./line');
    const myLine = new Line();

    var feed = 'https://qiita.com/ymd65536/feed';

    axios.get(feed).then(function (responce) {

        var feed_result = '';

        xml2js.parseString(responce.data, function (err, result) {
            if (err) {
                console.log(err.message);
            } else {
                feed_result = '\n' + '====' + result.feed.title + '====' + '\n';
                feed_result = feed_result + result.feed.entry[0].title + '\n' + result.feed.entry[1].title + '\n' + result.feed.entry[2].title + '\n' + result.feed.entry[3].title + '\n' + result.feed.entry[4].title;
                console.log(feed_result);
            }
        });

        // LINE Notify トークンセット
        myLine.setToken(process.env.LINE_NOTIFY_ACCESS_TOKEN);
        // LINE Notify 実行
        myLine.notify(feed_result);

    }.bind(this)).catch(function (error) {
        console.log(error);
    }.bind(this)).finally(function () {
        console.log('loading');
    }.bind(this));
//};
