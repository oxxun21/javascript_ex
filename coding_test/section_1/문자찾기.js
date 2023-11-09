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

/////////////////////////////////////////
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

let str2 = "COMPUTERPROGRAMMING";
console.log(solution(str2, "R"));

/////////////////////////////////////////
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
  // 문자열 끝에 t가 있어도 split은 빈 문자열 생겨서 반환
  // [ 'COMPUTE', 'P', 'OG', 'AMMING', '' ]
}
let str3 = "COMPUTERPROGRAMMINGR";
console.log(solution(str3, "R"));
