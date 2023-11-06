class Person {
  name;
  year;
  static like = "home";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnLike() {
    return "home";
  }
}

const gaeun = new Person("가은", 2002);
console.log(gaeun);
// static X -> Person { name: '가은', year: 2002, like: undefined }
// static O -> Person { name: '가은', year: 2002 }
// static이 있으면 객체에 귀속 되지 않음
console.log(Person.like);
// static like -> undefined
// static like = "home" -> home
// static 키워드는 인스턴스가 아닌 클래스 자체에 귀속
console.log(Person.returnLike());
// home

// factory constructor
class PersonFactory {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // obj로부터 이 클래스의 인스턴스를 만들겠다는 뜻
  static fromObject(object) {
    return new PersonFactory(object.name, object.year);
  }

  static fromList(list) {
    return new PersonFactory(list[0], list[1]);
  }
}

const gaeunFactory = PersonFactory.fromObject({ name: "가은", year: 2002 });
console.log(gaeunFactory);
// PersonFactory { name: '가은', year: 2002 }

const gaeunList = PersonFactory.fromList(["가은", 2002]);
console.log(gaeunList);
// PersonFactory { name: '가은', year: 2002 }
