function solution(s) {
  let answer = [...new Set(s)];
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

/////////////////////////////////////////
function solution(s) {
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer;
}
