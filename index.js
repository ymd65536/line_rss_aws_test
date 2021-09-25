
exports.handler = async (event, context, callback) => {

  const Line = require('./line');
  const myLine = new Line();

  // LINE Notify トークンセット
  myLine.setToken(process.env.LINE_NOTIFY_ACCESS_TOKEN);

  // LINE Notify 実行
  myLine.notify(event.message + ':\r\n' + Date(Date.now()));

};
