/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// * 1. animal 객체 정의

// 자바스크립트는 getter와 setter를 만들 수 있는 키워드를 제공한다. 
// ! 메서드 앞에 set, get 쓰기. 함수 이름은 같아도 됨
/*
  const animal = {
  legs: 4,
  tail: true,
  stomach:[],
  // ? setter
  set eat(food){
    this.stomach.push(food);   
  },
  // ? getter (불러와서 쓴다)
  get getEat(){
    return this.stomach;  
  }
}

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}

const fox ={
  prey: '',
}

fox.__proto__ = animal;    
tiger.__proto__ = animal;






new Object(), 생성자 함수, {}, 일반 함수

함수는 두가지 일을 할 수 있따.  (양면의 얼굴을 가지고 있다)

함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자함수다.

function User(name, age, email){
  this.name = name;
  this.age = age;
  this.email = email
}

function button(){

}

const a = button()

const person1 = new User('선범', 32, 'tiger@naver.com');

*/

// ? 생성자 함수로 객체 생성하기 
function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const tiger = new Animal();   // 생성자 함수 Animal을 new 키워드로 호출 => tiger은 객체가 된다. 
// tiger.legs... 값 다 나온다 => Animal의 능력 상속받음 

tiger.pattern = '호랑이 무늬';

tiger.hunt = function(target){
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`); 
}

const cat = new Animal();
cat.say = () => '니야아아아옹';   // cat만 접근할 수 있는 능력

const wolf = new Animal();
const dog = new Animal();






