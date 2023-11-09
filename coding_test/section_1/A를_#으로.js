function solution(s) {
  let answer = "";
  let arr = s.split("").join(" ");
  answer = arr.replace(/A/g, "#").split(" ").join("");
  return answer;
}
// 쓸데없는 짓 했네 ㅋㅋㅋ

let str = "BANANA";
console.log(solution(str));

/////////////////////////////////////////
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str2 = "BANANA";
console.log(solution(str2));

/////////////////////////////////////////
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}
