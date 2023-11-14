function solution(s, t) {
  let right = [];
  let left = [];
  let answer = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      right.push(0);
      num = 0;
    } else {
      num++;
      right.push(p);
    }
  }
  num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      left.push(0);
      num = 0;
    } else {
      num++;
      left.push(p);
    }
  }
  left = left.reverse();
  for (let i = 0; i < s.length; i++) {
    answer.push(Math.min(right[i], left[i]));
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

/////////////////////////////////////////
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
