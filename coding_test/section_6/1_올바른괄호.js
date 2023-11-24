// function solution(s) {
//   let answer = "YES";
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(s[i]);
//     if (s[i] === ")") stack.pop();
//   }
//   if (stack.length > 0) return "NO";
//   return answer;
// }
// 뭔가 이상한데 -> ) 얘가 더 많은건 어카지

let a = "(()(()))(()";
console.log(solution(a));
/////////////////////////////////////////
function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}
