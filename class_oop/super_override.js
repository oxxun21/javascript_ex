class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

class FemaleIdol extends Idol {
  part;

  constructor(name, year, part) {
    super(name, year); // 부모 클래스의 기존 constructor 사용
    this.part = part;
  }

  // override
  sayHello() {
    // return `Hello ${this.name} - ${this.part}`;
    // ${super.sayHello()} 부모 클래스의 sayHello 사용 가능
    // super 키워드 쓸 때 함수는 실행 가능, 변수는 X
    return `${super.sayHello()} - ${this.part}`;
  }
}

const yujin = new FemaleIdol("안유진", 2003, "보컬");
console.log(yujin);
// FemaleIdol { name: '안유진', year: 2003, part: '보컬' }
console.log(yujin.sayHello());
// override 전 : Hello 안유진
// override 후 : Hello 안유진 - 보컬
