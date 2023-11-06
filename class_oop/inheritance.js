class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${this.name} FemaleIdol extends Idol`;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${this.name} maleIdol extends Idol`;
  }
}

const yujin = new FemaleIdol("안유진", 2003);
console.log(yujin);
// FemaleIdol { name: '안유진', year: 2003 }
const jimin = new MaleIdol("지민", 1995);
console.log(jimin);
// MaleIdol { name: '지민', year: 1995 }

console.log(yujin.dance());
// 안유진 FemaleIdol extends Idol
console.log(yujin.name);
// 안유진

console.log(jimin.sing());
// 지민 maleIdol extends Idol
console.log(jimin.year);
// 1995

// 상속을 하게되면 상속받은 부모 클래스의 모든 프로퍼티를 자식 클래스는 받을 수 있지만 자식에서 부모로는 X

console.log(yujin instanceof Idol);
// true
console.log(yujin instanceof FemaleIdol);
// true
console.log(yujin instanceof MaleIdol);
// false

const cf = new Idol("부모 클래스", 2000);
console.log(cf);
// Idol { name: '부모 클래스', year: 2000 }
console.log(cf instanceof Idol);
// true
console.log(cf instanceof FemaleIdol);
// false
console.log(cf instanceof MaleIdol);
// false
