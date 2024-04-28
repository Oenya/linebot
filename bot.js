// LINE developersのメッセージ送受信設定に記載のアクセストークン
var ACCESS_TOKEN = 'EcQBuvWLGs7+uM6U9tGnLPjokgoxFtDk5wLkOEMdKI0ifm//RpfzDNiTcmP+xHpcBh+vx2lxc0mBM87IUN63FEP6PIRgMO9G88hI0gocRQtLeOdxWwdH/b6VnO0V75xF8OwS5Fsr0ueXRAfZ6XoXoAdB04t89/1O/w1cDnyilFU=';
var USER_ID = 'U418a6bde396510e93dc525b67d0511cc';

function doPost() {


  const diffMonth = (d1, d2) => {
    let d1Month, d2Month, diff;
 
    d1Month = d1.getFullYear() * 12 + d1.getMonth();
    d2Month = d2.getFullYear() * 12 + d2.getMonth();
 
    diff = d2Month - d1Month;
 
    return diff;
  }

  // WebHookで受信した応答用Token
  //var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
  // ユーザーのメッセージを取得
  //var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
  var fromdate = new Date('2017-12-31T03:24:00');
  var date = new Date();　
  var diff = date　- fromdate
  var anidate = Math.floor(diff/86400000);
  var month = diffMonth(fromdate, date);
  var sendm = '今日で付き合ってから' + anidate + '日\n'+ month + 'ヵ月目です';
  
  var bfromdate = new Date('2022-05-05T00:00:00');
  var bdate = new Date();
  var bdiff = bdate　- bfromdate
  var banidate = Math.floor(bdiff/86400000)+1;
  var bmonth = diffMonth(bfromdate, bdate);
  var bsendm = '結婚してから' + banidate + '日\n'+ bmonth + 'ヵ月目です';

 

  var message = sendm + '\n' +bsendm;
    var postData = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text": message,
    }]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);

}