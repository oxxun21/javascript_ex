function solution(s) {
  let answer = "YES";
  let text = s.toLowerCase();
  let arr = [];
  let copyArr = [];
  for (let t of text) {
    if (t.charCodeAt() >= 97 && t.charCodeAt() <= 122) {
      arr.push(t);
      copyArr.push(t);
    }
  }
  if (copyArr.reverse().join("") !== arr.join("")) answer = "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

/////////////////////////////////////////
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, ""); // /[^a-z]/g 소문자가 아닌 것들은 공백으로 변경
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}
