function solution(m, product) {
  let answer = 0;

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

/////////////////////////////////////////
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    // 남은 예산
    let money = m - (product[i][0] / 2 + product[i][1]); // 할인 받은 비용
    let cnt = 1;
    // 남은 가격으로 살 수 있는거
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break; // 답 나오면 멈춤
      // 할인된 상품은 포함X
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
