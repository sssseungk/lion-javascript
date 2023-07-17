/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// Animal => tiger => 호돌이 (상속)
// * 클래스로 정의하기
class Animal{
  legs = 4;
  tail = true;
  stomach = [];

  // 생성자 함수 연결 
  // ? 객체를 생성하면 최초 1회 실행된다.
  constructor(name){
    this.name = name;
  }
  // ? setter
  set eat(food){
    this.stomach.push(food);   // 배열 stomach에 집어넣는다.
  }
  // ? getter
  get eat(){
    return this.stomach
  }
}

// * 클래스 Tiger 정의하기(Animal 능력 사용할 수 있는 Tiger)
class Tiger extends Animal{

  prey = '';
  constructor(name, pattern){
    // ? super함수() -> 내 상위(부모)의 프로퍼티를 가져와서 실행하겠다.  => this.name = this
    super(name)
    this.pattern = pattern;
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }

  // ? static method => 생성자를 통해 생성한 객체가 쓸 수 있는게 아니라 실제 클래스가 가지고 있는 것이기 때문에 클래스(생성자함수)에 접근해야함.
  static sleep(name){
    console.log(name + '이 잠을 잔다.');
  }
}

// * 1. 객체 tiger가 생성한다.

const beom = new Tiger('범', '호랑이무늬');
// const tiger = new Animal('호돌이')    // cunstructor의 this : tiger



class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  // ? 기존 작성 방식
    /*
    constructor(qValue, wValue, dValue, fValue){
    this.q = qValue
    this.w = wValue
    this.d = dValue
    this.f = fValue
  }
  */

  // ? 들어가는 값이 많을 경우 객체로 넣기
  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }
  
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});

