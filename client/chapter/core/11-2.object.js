/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

// text에 message 복사
let text = message;          // 원시값을 담아서 text와 message는 다른 값을 가리키고 있음
text = '멋쟁이 사자처럼 6기'

// conversationTool에 messenger 복사
let conversationTool = messenger;

// ! 문제점 => 참조에 의한 복사를 할 경우 값을 변경하면 원본 값도 변경된다.
// conversationTool의 name값 변경 => 기존의 messenger도 line으로 변경됨
conversationTool.name = 'line';

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// * 객체 복사 방법
// 1. for ~ in 문을 사용한 복사

// ? 얕은 복사
const cloneObject = {};

for(const key in messenger){
  cloneObject[key] = messenger[key];
}


// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger)


// 3. 전개 연산자(...)를 사용한 복사 => 사기임(🐶꿀)
const spreadObject = {...messenger}


// 4. 객체를 복사해주는 유틸 함수 
// 일반함수
/*
function copydObject(object){

  return Object.assign({}, object)
} 
const newObject = copyObject(messenger);
*/

// copydObject 함수는 object를 받고 object의 assign을 통해 전달받은 object를 복사해서 값을 반환하는 함수이다.
// 화살표 함수로 바꾸기
const copydObject = object => Object.assign({}, object)


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = {...cssMapA, ...cssMapB};


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// * 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copyedContainerStyles = {...containerStyles};


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
