function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 이건 뭐지?
  answer = Math.min(...arr);
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

/////////////////////////////////////////
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 가장 큰 정수로 초기값 설정해둔 것
  //  min = arr[0]; 으로 초기화 가능
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]; // 첫 수는 무조건 들어가게됨 -> 이후 다음 수들과 비교
  }
  answer = min;

  // answer = Math.min.apply(null, arr);  -> 이런 방법도 있음
  return answer;
}

let arr2 = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr2));
