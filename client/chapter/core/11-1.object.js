/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-zQsadkq%1231', 
  name: 'beom',
  email: 'seonbeom@gmail.com',
  isSignIn: true,
  permission: 'paid'  // free | paid
}

console.log(authUser);


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.permission);
console.log(authUser.email);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['email']);
console.log(authUser['name']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(){

}

createUser();



// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// ,, 안붙이면 red값이 나온다. ,, 써서 건너뛰게함
let [,,green] = color;

for(let [key, value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];
  console.log(key);
}


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 객체 생성
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
}

// 원래는 이렇게 각각 지정해줘야 한다.
// const 권혜미 = salareis.권혜미
// const 이수연 = salareis.이수연
// const 강예나 = salareis.강예나
// const 김태일 = salareis.김태일

// 분해하고 싶은 객체 쓰기(객체를 분해해서 따로 담는다.)
const {권혜미, 이수연, 강예나, 김태일} = salaries;

// console.log(salaries.권혜미); -> 분해하기 전에는 이렇게 작성해줘야 한다.
console.log(권혜미);  // * 50 ->  분해해서 변수처럼 쓸 수 있다.


// ? 실사용 예시
function setElementCss(width, height, overflow, color){
  // 매개변수에 받을게 많아지면 매개변수와 인수에 순서대로 맞춰서 작성해줘야함 => 귀찮음. 복잡함
  // * 해결방법 : setElementCss(100, 200, false, 'red')를 객체로 만들어버리기 
  console.log(width);  // 100

}

setElementCss(100, 200, false, 'red')

// -------------------------------------

// * setElementCss(100, 200, false, 'red')를 객체로 만들어버리기 => options : 객체
function setElementCss1(options){

  console.log(options.width, options.color);

}
// 객체를 던짐으로써 장점 : 순서 상관이 없다. (객체는 순서가 중요하지 않다.)
const defaults= {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
}

setElementCss1(defaults)

// ! 구조 분해 할당을 사용하는 이유 => 
// ? 배열의 구조 분해 할당 : 순서가 정해져 있다.(순서가 중요함!!) 변수의 이름을 바꿀 수 있다. 
// ? 객체의 구조 분해 할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.

// * 객체 구조분해할당 변수 이름 바꾸기 예시
function setElementCss2(options){

  const { width: w, height, overflow, color:c } = options;

  console.log(w,c);
}