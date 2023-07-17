/* ---------------------------------------------------------------------- */
/* Number Type                                                            */
/* ---------------------------------------------------------------------- */

// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;

// 1,000 단위 구분하듯 사용할 수 있을까요?
riches = 100_000_000;

// 숫자 옆에 `e`(지수)를 붙여 0의 갯수를 설정할 수 있습니다.
// 1 뒤에 0 8개 붙이세요 !
riches = 1e8;


// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6


// 작은 수도 `e`를 사용해 표현할 수 있습니다.
// 0을 앞으로 6개 붙이기
riches = 1e-6; // → 1 / 10 ** 6


/* 어림수 ---------------------------------------------------------------- */

let number = 90_127.53100032;
console.log('기본값 : ', number);   // 90127.53100032

// 내림 : 소수점 뒤를 내림처리 해서 정수만 가져간다.
let floor = Math.floor(number);
console.log('floor: ', floor);

// 반올림(5 이상이면 반올림)
let round = Math.round(number);
console.log('round : ',round);

// 올림(소수점 뒤가 5이하이더라도 무조건 올린다.)
let ceil = Math.ceil(number);
console.log('ceil : ', ceil);

// 절삭(소수점 이하) : 소수점 뒤 아예 없애기
let truncate = Math.trunc(number);
console.log('truncate : ', truncate);

// 난수 : 랜덤한 수 생성하기
// random은 인수를 받지 않는다. 무시됨 
// * 뒤에 *10하면 1부터 10까지 중의 랜덤한 수 생성한다.
let random = Math.random() * 10;
console.log('random : ', random);
// ?난수를 소수점 내려서 반환하기
let random1 = Math.floor(Math.random() * 10);

// 여러 수 중, 최댓값을 찾아서 반환한다. => 비교할 때 좋음
let max = Math.max(10, 100, 1000, 123, 5555);
console.log('max : ', max);

// 여러 수 중, 최솟값을 찾아서 반환한다.
let min = Math.min(10, -10, -100, 123, 10000);
console.log('min : ', min);

// 거듭제곱(a의 b제곱 :: 2의 53승)
let pow = Math.pow(2, 53);      // 2**53이랑 똑같음
console.log('pow : ', pow);

// 절댓값(무조건 양수 반환)
// -1 넣으면 1 반환한다.
let abs = Math.abs(-1);
console.log('abs : ', abs);



// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (min, max)=>{
  // 예외처리
  if(min > max) throw new Error('최소값은 최댓값보다 작아야 합니다.');
  // 10까지 나오게 하려면 floor가 아닌 round로 해야한다.
  return Math.round(Math.random() * (max-min) + min)
};

console.log(getRandomMinMax(5, 10));



/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환


/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};

// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기

// 2. 16진수 → 10진수 변환하기