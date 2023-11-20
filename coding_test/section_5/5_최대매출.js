function solution(k, arr) {
  let answer = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      // num += arr[j];
      console.log(arr[i], arr[j]);
    }
    // if (num > answer) answer = num;
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
