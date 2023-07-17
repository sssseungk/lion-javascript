/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';

// 단항 연산자
let unary = +a; // 숫자 10
// 이항 연산자
let binary = a + b; // 문자열 1030

// 삼항 연산자
let ternary = a === 10 ? true : false;  // false

let ternary1 = Math.random() > 0.5 ? 'big' : 'small';

// 산술 연산자: 덧셈
let addition = 1 + 2; 

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

if(a % 2 == 0){
  console.log('짝수');
}

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;
let power1 = Math.pow(2,53)-1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';   // 숫자 27

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];  // typeof는 string으로 나옴
//console.log(onlyWorkDefaultValues);  // 1, 2, 34, 5, 6

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
const newArray = firstArray.concat(secondArray);  // [1, 2, 3, 4, 5, 6]

// spread syntax
console.log( ...firstArray ); // 1 2 3
console.log( ...firstArray, ...secondArray );  // 1 2 3 4 5 6
console.log( [...firstArray, ...secondArray] );  // [1, 2, 3, 4, 5, 6]


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --

let counter = 0;
++counter // 1
counter++  // 0

for(let i = 0; i < 10;){
  console.log(++i);
}

for(let i = 0; i < 10;){
  console.log(i++);
}

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // 135

let total = count % 4;
count = count / 2;
let pow = count ** 3;

total = total * count + pow;

// console.log( total );



