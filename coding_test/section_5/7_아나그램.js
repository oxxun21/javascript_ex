// function solution(str1, str2) {
//   let answer = "YES";
//   let sh = new Map();
//   for (let x of str1) {
//     if (sh.has(x)) sh.set(x, sh.get(x) + 1);
//     else sh.set(x, 1);
//   }
//   for (let x of str2) {}
//   console.log(sh, sh2);
//   return answer;
// }

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
/////////////////////////////////////////
function solution(str1, str2) {
  let answer = "YES";
  let sh = new Map();
  for (let x of str1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) === 0) return "NO";
    sh.set(x, sh.get(x) - 1);
  }
  return answer;
}
