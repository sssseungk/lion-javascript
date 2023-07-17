/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// 함수 선언문 정의
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

// 매개변수 전달
const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// ! 1. 함수 선언문을 함수 표현식을 만들어보기
// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  console.log(arguments);

  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것은 ? : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템 총합 구하기
  let total = 0;
// * 1. for 문
//   for(let i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }

  // * 2. for..of 문
  // for(let key of arguments){
  //   total += key;
  // }

  // * 3. forEach 빌려쓰기
  // arguments가 배열이 아니기 때문에 forEach로 돌릴 수 없다.
  // arguments.forEach(item)=>{
  //   console.log(item);
  // }
  //Array 능력중 forEach문을 arguments가 빌려쓰고 값은 함수가 들어간다. => 아이템 순환 처리
  // Array.prototype.forEach.call(arguments, function(item){
    //console.log(item);  // 1000 500 200 6500 100
    // total += item;
  // })

  // * 4. Array의 힘을 빌리기
  // arguments인 유사배열을 진짜 배열로 만듦
  // 찐 배열이 가지고 있는 능력 중 유사배열인 arguments가 slice를 빌려써서
  // 값을 도려내서 배열에 집어넣어 진짜 배열로 만든다.
  // => 진짜 배열이 됐으므로 배열의 능력을 다 사용할 수 있음(push, pop, reduce..) 
  // Array의 slice 기능으로 arguments 유사 배열을 진짜 배열로 만들고 realArray에 집어넣는다.
  // let realArray = Array.prototype.slice.call(arguments)

  // console.log(realArray);

  // realArray.forEach(function(item){
  //   total += item;
  // })
  // return total;


  // // * 5. Array.from()
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // })

  // Object.prototype.toString()
  // Object.entries()


  // * 6. spread syntax (spread operator) 이용 : 배열 만드는 방법
  // 가장 많이 쓰임(최신이기도 함) 
  // ? => 장점 : 배열 합성이 편함
  let arr = [10, 50, 100];
  //let realArray = [...arguments, ...arr];  => arguments랑 기존 arr랑 합쳐짐
  let realArray = [...arguments];

  // console.log(realArray);

  // realArray.forEach(function(item,index){
  //   total += item;
  // })

  //  return total;

  // * 7. Array.reduce
  // reduce 첫 번째 값 : 누적값(acc) => 누적값이 함수 안에 들어있음
  // 두 번째 값 : item => 순회하는 아이템들
  // initValue : 최초값을 설정해줘야함. 그 최초값은 return 끝의 0에 들어감
  // return realArray.reduce((acc, item)=> acc + item ,0) 이렇게 줄여쓸 수도 있음
  return realArray.reduce((acc, item)=>{
    return acc + item
  }, 0)    // 0 => initValue

   
};
const result = calculateTotal(1000, 500, 200, 6500, 100)

console.log(result);







// 익명(이름이 없는) 함수 (표현)식
// console.dir(anonymousFunctionExpression) => 함수 자체 던지면 함수가 튀어나온다.
// dir은 안의 내용을 조회한다. 뭘 갖고 있는지
let anonymousFunctionExpression = function(){

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};


// 콜백 함수 (표현)식
// 매개변수에 callback을 받음
// 정의
let callbackFunctionExpression = function(isActive, callback){
  // 내부적으로 이렇게 실행됨 => callback() = function(){console.log('콜백 함수 실행!');
  // callback();
  
  if(isActive){
    callback();   // 조건을 따진 이후 함수 실행하거나 실행안함 => 콜백함수(나중에 실행됨)
  }
};

// 호출
callbackFunctionExpression(
  true,
  // 첫 번째 인수로 함수 본문을 넘김 (함수 body가 통째로 전달됨)
  function(){
    console.log('콜백 함수 실행!');
  }
);




// 함수 선언문 vs. 함수 (표현)식
// 뭐가 더 좋다고 정의할 순 없음


// ? 즉시 실행 함수 (표현)식 : 함수 생성과 동시에 즉시 실행함
// Immediately Invoked Function Expression
// 나온 이유 : 변수의 보호를 위해 탄생함

let IIFE;

// 함수 스코프 형셩됨
(function(){
  var x = 10;
  console.log('즉시 함수!');


})()   // 호출부

// console.log(x);  =>  x는 함수 스코프 안에 갇혀 밖에서 접근할 수 없다. (캡슐화, 은닉화 => 변수 보호)
// 이거 무슨 예제임,,,
const MASTER = (function (){
  var x = 10;
  console.log('즉시 함수!');

  return '퉤';
  //return {};   => 객체 내보냄
})()

console.log(MASTER);