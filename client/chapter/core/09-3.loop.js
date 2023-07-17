/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기
// 변수 안에 넣기 
for(let j=0; j<10; j++){
  if(j % 2 === 0){
    console.log(j);
  }
}
//j는 중괄호 안에 있다고 인식이 돼서 밖에서는 j에 접근할 수 없다.
console.log(j);




// 변수 밖으로 빼기
let j = 2;
for(; j <= 10;){
  j++
  if(j % 2 === 0){
    console.log(j);
  }
}
console.log(j); // 11이 출력된다.


// ! .split(' '); -> 문자에서 내가 넣은 항목들만 조회해서 문자들을 배열로 만들어주는 문자 메서드
// ! '철수 영희 미애'.split(' ') => 결과 : ['철수', '영희', '미애']

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}



// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for(let i = 0; i < l; i++){

  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // SVG는 건너뛰어서 출력되지 않는다.

  // * 방법 1. || 연산자 사용
  // if (value === 'SVG' || value === 'jQuery') continue;

  // * 방법 2. includes 사용
  // includes 사용해도 된다.
  //if (value.includes('SVG') || value.includes('jQuery')) continue;

  // * 방법 2 + 소문자 받고 싶으면 toLowerCase로 바꿔주기
  //if (value.toLowerCase().includes('SVG') || value.toLowerCase().includes('jQuery')) continue;

  // * 방법 2 + 코드 너무 길어서 분리하기
  // 위 코드가 너무 길다 싶으면 분리해주기
  //let lower = value.toLowerCase();
  //if (lower.includes('SVG') || lower.includes('jQuery')) continue;

  if(lower.includes('jquery')) break;

  console.log(value);
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
// ! 역순환 방법 1
// * let l = frontEndDev.length;
let zero = 0;

for(let i = l - 1; zero < i; i){
  console.log(frontEndDev[--i]);
}

// ! 역순환 방법 2
// single let pattern임
// let i = l, let i = subject; 요약해서 쓴 single let pattern
// for(let i = l, subject; (subject = frontEndDev[--i]);){
//   console.log(subject);
// }