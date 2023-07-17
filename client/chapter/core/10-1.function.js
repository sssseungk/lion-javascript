/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



// // 함수 선언 (총합 구할 수 있는 함수 선언) 
// function calcPrice(priceA, priceB, priceC){

//   // ? priceC에 값이 들어가지 않을 경우를 조건처리해주기 방법 1))))))
//   // if(typeof priceC === 'undefined'){
//   //   priceC = 0;
//   // }

//   // ? 방법 2)))) priceC에 undefined가 들어가면 if문이 TRUE가 돼서 실행됨
//   // if(!priceC) priceC = 0;

//   // ? 방법 3)))
//   // false이면 값을 할당한다..
//   //priceC ||= 0;

//   // ? 방법 4)))) 값이 있으면 기존값을, 없으면 10을 할당한다.
//   priceC ??= 10;

//   return priceA + priceB + priceC;
// }

// 10000, 3500 인수를 각각 priceA, priceB 매개변수에 들어간다.
// ? 500을 입력하지 않고 priceC에 아무것도 전달하지 않으면 undefined가 되어 숫자와 undefined를 더하면 None이 된다.
// const result = calcPrice(10000, 3500, 500)  // 함수 호출 -> calcPrice안에 아무것도 없으면 result에는 undefined가 반환됨
console.log(result);

function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
){

  if(!priceA || !priceB){
    // * 에러를 생성해서 던져라. rpiceA에 아무 값이 들어오지 않는다면. 
    throw new Error('calcPrice 함수의 첫 번째 매개변수는 필수 입력 값 입니다.');
  }

  return priceA + priceB + priceC + priceD;
}

const result = calcPrice(10, 30);
console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
/*
* 함수 만드는 단계
*1. function name
*2. validation
*3. return value
*4. parameter, argument
*5. test [Test Driven Development] => console.assert가 해준다. 

*/

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16){


  // ! pxValue에 문자열이 들어올 경우 경우 px 없애고 숫자로 봔한해주기

  // * 방법 1.))))
  if(typeof pxValue === 'string'){
    // 수로 바꿔주소 10진수 표기하기
    // parseInt -> 문자 날리고 앞 정수만 반환해주는 메서드
    pxValue = parseInt(pxValue, 10);
  }

  // * 방법 2.)))) ⬇️ 이렇게 쓸 수도 있음.(첫 번째 falsy를 반환함.) 결과가 참이면 && 뒤에 코드 실행.
  // typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));

  // * 방법 3.)))) throw 사용하기
  // if(!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  

  // ? 방법 1. 
  // return (pxValue / base) + 'rem';
  // ? 방법 2. 템플릿 리터럴 
  return `${pxValue / base}rem`
}

// ? 테스트 도구 => 결과값이 동일하면 콘솔에 아무것도 찍히지 않고, 값이 다르면 에러가 찍힌다.
// 에러 : 어설션에 실패함 : console.assert
console.assert(rem(20) === '1.25rem');
console.assert(rem('30px', 16) === '1.875rem');
console.assert(rem('56px', 10) === '5.6rem'); 


// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.