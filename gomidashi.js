// LINE developersのメッセージ送受信設定に記載のアクセストークン
var ACCESS_TOKEN = 'VGrdMD3qf3haCq044W+gGyLsUD3kfV0nNHR71gtJnT/otMQ2LJcndiqNIqbLykHOzFuZdyFm9X+FPvIWX3tf1u2xbonY1PEqUceEGhwDIWmyW+yr86aRuOdvtogMh4nkKnFEuPwpbHTfP4pCSO6UqgdB04t89/1O/w1cDnyilFU=';
var USER_ID = 'U08c4aa7fb2103a4637d1b74b6c526aa0';


function main(){
  var date = new Date () ;
  var youbi = date.getDay()
  console.log(youbi);
  if(youbi == 2 || youbi == 5){//火、金
    console.log(youbi);
    dogomiPost('今日は燃えるごみの日です');
  }
  else if(youbi == 1){//月
    console.log(youbi);
    dogomiPost('今日は燃えないごみ、段ボールの日です');
  }
  else if(youbi == 3){//水
    console.log(youbi);
    dogomiPost('今日はペットボトル、缶、瓶の日です');
  }
  
  
}

function dogomiPost(str) {
    var postData = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text": str,
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