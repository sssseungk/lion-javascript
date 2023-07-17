/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(empty);   // null


// 2. 값이 할당되지 않은 상태
let unknown;
console.log(unknown); // undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// 객체 능력 중 string 메서드(함수) 사용
const hi = new String('hello');

const double = "hello" + (1 + 2);
const single = 'hello';
const backtick = `hello ${ 1 + 3}`;

console.log(typeof hi);   // object

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(12323);

const integer = 123;
const floatingPointNumber = 10.45;

console.log(typeof number);   // object

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123);
const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof bool);   // boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({})
const obj = {}

console.log(obj);   // {}

// 8. 고유한 식별자(unique identifier) -> 심볼
const unique = Symbol('uid');
// console.log(unique);
console.log(typeof unique)    // symbol

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()
console.log( typeof (1 + 2));   //number


// 언어 상, 오류




// Object
// 객체 리터럴 방식
const user = {
  // user 객체가 가지고 있는 property : name, age
  name: 'tiger',
  age: 28,
  // user의 메서드
  sayHi: function(){
    console.log('hello~');    // hello~
  }
}

console.log(user);  // {name: 'tiger', age: 28, sayHi: f}
console.log(user.sayHi());  // undefined


// Array
const newArray = new Array();  
const arr = [10, 100, 1000, 1, 2, 3];

const count=0;

`li:nth-child(${ count + 1})`

console.log(arr[3]);    // 1

// function

function fishBreadFrame(재료){
  return 재료 + `맛 붕어빵`;
}
// 함수 실행
const 팥붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(와사비붕어빵);    // 와사비맛 붕어빵

// this

