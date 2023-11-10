function solution(s) {
  let answer = [...new Set(s)].join("");
  return answer;
}
console.log(solution("ksekkset"));

/////////////////////////////////////////
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i] === i)) answer += s[i];
  }
  return answer;
}

// indexOf 이용해서 문자 개수 알아내기
function solution(s) {
  let answer = 0;
  let pos = s.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }
  return answer;
}
