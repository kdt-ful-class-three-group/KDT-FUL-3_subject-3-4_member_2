import JSONReturn from './readfile.js';

let JSONGet = JSONReturn();

// let table = document.getElementsByTagName('table');
function htmlInsert() {
let i = document.createElement('p');
  i.innerHTML = `
    <p>${JSONGet.title} + ${JSONGet.content}</p>
  `
  document.body.appendChild(i);
}

export default htmlInsert();