const getPromise = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
    }, sec * 1000);
  });

async function runner() {
  try {
    const result = await getPromise(2);
    console.log(result);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(2);
    console.log(result3);
  } catch (e) {
    console.log("---catch---");
    console.log(e);
  } finally {
    console.log("---finally---");
  }
}
runner();
console.log("실행 끝");
// 실행 끝
// 완료
// 완료
// 완료
