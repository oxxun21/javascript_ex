function solution(arr) {
  let answer = arr;
  let total = arr.reduce((a, c) => a + c, 0);
  let stop = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (total - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        stop = 1;
        break;
      }
    }
    if (stop) break;
  }

  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
