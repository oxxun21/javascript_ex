function PersonFunction(name, year) {
  // console.log(global);
  // new -> PersonFunction {}
  // new X -> Object [global]

  // console.log(new.target); -> new 키워드 확인방법
  if (!new.target) {
    // new 키워드를 사용하지 않았을 때
    // 강제로 생성자 함수로 리턴
    return new PersonFunction(name, year);
  }

  this.name = name;
  this.year = year;

  this.like = function () {
    return `${this.name} 집이 제일 좋아`;
  };
}

const gaeun = new PersonFunction("가은", 2002);
console.log(gaeun);
// PersonFunction { name: '가은', year: 2002 }
console.log(gaeun.like());
// 가은 집이 제일 좋아

const gaeun2 = PersonFunction("가은", 2002);
console.log(gaeun2);
// undefined
// 생성자 함수에는 new 키워드가 필요함
console.log(global.name);
// 가은
// new 키워드 없이 생성자 함수를 실행하면 this 키워드는 글로벌의 값들을 설정하게 됨

// *생성자 함수는 일반 함수에서만 사용 가능, 화살표 함수에선 생성자 함수 생성 불가
// const PersonArrow = (name, year) => {
//   this.name = name;
//   this.year = year;
// };

// const gaeun3 = new PersonArrow("가은", 2002);
// console.log(gaeun2);
// TypeError: PersonArrow is not a constructor
