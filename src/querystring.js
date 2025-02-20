// * querystring 잘라서 value만 추출
function queryStringSplit(data){
  let arrayData =[];
  // * 글자 split 실행
  data.split('&').forEach(element => {
    let result = element.split('=')[1]
    arrayData.push(result)
  })
  return arrayData;
}

module.exports = queryStringSplit;