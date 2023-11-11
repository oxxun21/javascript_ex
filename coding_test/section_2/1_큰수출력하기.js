function solution(arr) {
  let answer = [];
  let init = 0;
  for (let x of arr) {
    if (x > init) answer.push(x);
    init = x;
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
