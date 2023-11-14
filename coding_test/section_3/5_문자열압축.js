function solution(s) {
  let answer = "";
  let num = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      num++;
    } else {
      if (num > 1) {
        answer += s[i] + num;
      } else {
        answer += s[i];
      }
      num = 1;
    }
  }
  return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));

/////////////////////////////////////////
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
