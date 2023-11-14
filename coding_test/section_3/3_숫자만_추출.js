function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

/////////////////////////////////////////
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}
