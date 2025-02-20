const http = require('http');
const fs = require('fs');

// *첫 페이지 index.html 구동
function firstPageSet(response){
  const filePath = fs.readFileSync('./index.html')
  response.writeHead(200, {'Content-Type' : 'text/html'}).end(filePath);
}

// * pageSetting 부분, statuscode를 추가하여 에러 처리가 가능하게 함
function pageSet(statuscode, url, response){
  // * 확장자 명을 확인해서 Content-Type을 동적으로 수정
  const contentGet = fileCheck(url)
 
  const filePath = fs.readFileSync( '.' + url)
  response.writeHead(statuscode, {'Content-Type' : contentGet}).end(filePath);
}

// * file마다 content-Type 설정 할 수 있게 확인
function fileCheck(url) {
  const urlCompare = url
  if(urlCompare.endsWith('.html')){
    return 'text/html';
  }
  if(urlCompare.endsWith('.js')){
    return 'text/javascript';
  }
}


// * 서버 구동 부분
const server = http.createServer(function(request, response){
  // * 없는 페이지 발생 시 실행 -> 404 page
  try{
    // * GET 방식 구동 
    if(request.method === 'GET'){
      // * 메인 페이지 표출하기
      if(request.url === '/'){
        firstPageSet(response);
      }

      // * 초기 구동 js
      if(request.url === '/app.js'){
        const url = request.url 
        pageSet(200, url, response)
      }

      // * 없는 페이지 표출하게 생성
      if(request.url === '/write.html'){
        const url = request.url 
        pageSet(200, url, response)
      }

    }

    // * POST 방식 구동
    if(request.method === 'POST'){
      
    }
  }
  // * 페이지 에러 처리
  catch(err){
    if(err) pageSet(404, '/404Page.html', response)
  }
})

// * 서버 시작 8000 포트 사용
server.listen(8000, function(){
  console.log("http://localhost:8000 서버 진행중")
})

