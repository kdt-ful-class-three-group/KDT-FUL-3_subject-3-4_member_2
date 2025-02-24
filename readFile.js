import {readFileSync} from 'node:fs';


function JSONReturn(){

  // * JSON 파일 읽어들임
let checkFile = readFileSync('data.JSON');

// * JSON 파일 object로 변환함
let objectJSON = JSON.parse(checkFile.toString());

return objectJSON;
}


export default JSONReturn();

// * 삽입 시킬 요소 생성
// let test = document.createElement('p');

// test.innerHTML = `<p>${objectJSON.title}</p>
// <p>${objectJSON.content}</p>`


// // * table에 삽입
// table.appendChild(test);
