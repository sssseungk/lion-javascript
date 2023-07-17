/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

// undefined가 더 맞는 상황
if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';
// emailAddress가 있으면 user@company.io를 써라


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH); // 10px
console.log(null ?? WIDTH); // 10px

console.log(undefined || WIDTH); // 10px
console.log(undefined ?? WIDTH); // 10px

console.log(boolean || WIDTH);  // 10px
console.log(boolean ?? WIDTH);  // false

console.log( '' || WIDTH);  // 10px
console.log( '' ?? WIDTH);  // 빈 문자열 출력



// Logical Assignment Operators
let x;
let y;


x ||= y;  // (x = x || y) x가 false이면 y값을 x에 할당시키겠다.

x &&= y;  // x가 true일때 y값을 x에 할당

x ??= y;  // x가 undefined, null일때 y값을 x에 할당



let title;  // undefined

title ||= '제목입니다.';

console.log( title );

