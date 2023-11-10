function solution(s) {
  let answer;
  return answer;
}
console.log(solution("study"));

/////////////////////////////////////////
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1); // mid 인덱스부터 mid+1 인덱스 전까지
  // if (s.length % 2 === 1) answer = s.substr(mid, 1); // mid 인덱스부터 1개 뽑아냄
  else answer = s.substring(mid - 1, mid + 1);
  // else answer = s.substr(mid - 1, 2);
  return answer;
}
console.log(solution("study"));
