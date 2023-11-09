function solution(arr) {
  let answer = arr;

  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/////////////////////////////////////////
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, c) => a + c, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr2 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr2));

/////////////////////////////////////////
// *정답이 여러개 있는 경우 수정 (답이 발견되면 for문 break)
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, c) => a + c, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }

  return answer;
}

let arr3 = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr3));
