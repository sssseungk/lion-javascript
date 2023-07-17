/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log( typeof String(YEAR));  // 명시적 형 변환
console.log( YEAR + ' ');  // 암시적 형 변환
console.log( typeof (YEAR + ''));

// undefined, null
let days = null;
console.log( typeof String(null));
console.log( null + '');

let undef = undefined;
console.log( typeof String(undefined));
console.log( undefined + '');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(friend);  // Undefined
console.log(Number(friend));  // None


// null
let bankbook = null;
console.log(Number(bankbook));  // 0


// boolean
let cutie = false;
console.log(Number(cutie));     // 0 (true : 1)

// string
let num = '250';    // 숫자형 문자
console.log(num);   // 문자열 250 출력
console.log( Number(num));  // 숫자로 형변환  
// 암시적 형변환
console.log(+num);  
console.log( num * 1);
console.log( num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));  // NaN
// 문자열(px) 제외시키고 숫자값만 뽑아내는 방법 : parseFloat()
let w = parseFloat(width);
console.log(w);   // 105.3 반환

let p = parseInt(width);
console.log(p);   // 105 반환


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
// 명시적 형변환
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));  //true
console.log(Boolean(0));  //false

// 암시적 형변환
// ! : 부정 연산 : 기존 값을 뒤집음
console.log('암시적 형 변환 : ' + !false);

console.log("" + 1 + 0)