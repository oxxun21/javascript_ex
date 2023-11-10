function solution(s) {
  let answer = s.toUpperCase();
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

/////////////////////////////////////////
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32); // 해당 소문자에서 대문자로 코드 변경
    else answer += x;
  }
  return answer;
}
