const http = require('http');
const fs = require('fs');

function firstPageSet(response){
  const filePath = fs.readFileSync('./index.html')
  response.writeHead(200, {'Content-Type' : 'text/html'}).end(filePath);
}

// * 서버 구동 부분 
const server = http.createServer(function(request, response){
  // * GET 방식 구동 
  if(request.method === 'GET'){
    // * 메인 페이지 표출하기
    if(request.url === '/'){
      firstPageSet(response);
    }
  }


})

// * 서버 시작 8000 포트 사용
server.listen(8000, function(){
  console.log("http://localhost:8000 서버 진행중")
})

