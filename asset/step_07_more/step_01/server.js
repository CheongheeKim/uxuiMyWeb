var http = require('http');
var fs = require('fs'); //file systyem
//server.js

// 서버 구현 하는 방법 
http.createServer(function(req,res){
fs.readFile('index.html',function(err,data){
  res.writeHead(200,{'content-Type' : 'text/html'});
  //프로토콜 에러 상태 코드
  //200 : 요청 성공
  //400 : 서버, 파일 에러 ex)404(서버 및 파일을 찾을 수 없습니다.)
  //500 : 서버 자체를 찾을 수 없습니다.
  res.write(data);
  res.end();
  console.log('서버가 구현되었습니다.');
  console.log('http://localhost:1377');
  console.log('위 주소로 접속해 주세요.'); 
  });
}).listen(1377);