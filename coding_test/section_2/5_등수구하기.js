function solution(arr) {
  let answer = [1, 1, 1, 1, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/////////////////////////////////////////
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // [1, 1, 1, 1, 1]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}
