class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // getter
  // - 데이터를 가공해서 새로운 데이터 반환
  // - private한 값 반환
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  // setter
  // 바꾸고 싶은 프로퍼티 이름과 겹치게 설정 하긴함
  // 파라미터 무조건 한개 받아야함
  // 프로퍼티를 private으로 설정하면 직접 액세스 불가 -> setter 사용
  set name(name) {
    this.name = name;
  }
}

const gaeun = new Person("가은", 2002);
console.log(gaeun);
// Person { name: '가은', year: 2002 }
console.log(gaeun.nameAndYear);
// 가은-2002
gaeun.name = "간쨩간바레";
console.log(gaeun);
// Person { name: '간쨩간바레', year: 2002 }

// private value -> 실제로 값을 저장하고 있지만 외부에서 액세스 하지 못하는 값
class PersonPrivate {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const gaeunPrivate = new PersonPrivate("가은", 2002);
console.log(gaeunPrivate);
// PersonPrivate { year: 2002 }
console.log(gaeunPrivate.name);
// 가은 -> getter를 사용해서 접근 가능
gaeunPrivate.name = "간쨩간바레";
console.log(gaeunPrivate.name);
// 간쨩간바레
