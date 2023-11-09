function solution(s, t) {
  let answer = 0;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(t)) {
      answer++;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
