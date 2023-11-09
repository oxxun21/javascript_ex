function solution(s) {
  let answer = "";
  let arr = s.split("").join(" ");
  answer = arr.replace(/A/g, "#").split(" ").join("");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
