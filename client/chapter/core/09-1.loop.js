/* --------------- */
/* While Loop      */
/* --------------- */


// let repeat = 0;
// while(repeat < 10){
//   console.log(repeat);
//   repeat++;
// }



const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let i = 0;
while(i < frontEndDev.length){
  let value = frontEndDev[i];
  console.log(value);
  i++;
}

// while 문 (역순환 : 역방향)
let l = frontEndDev.length - 1; //인덱스는 6이 마지막, 배열의 길이는 7.
while(l >= 0){

  let value1 = frontEndDev[l];
  console.log(value1);
  --l;
}

// 성능 진단 : 순환 vs. 역순환
// 약 0.09
let z1 = performance.now();
let p = 0;
while( p < frontEndDev.length){
  let value = frontEndDev[p];
  console.log(value);
  p++;
}


// 약 0.02 역방향이 훨씬 빠름
let z2 = performance.now();
let k = frontEndDev.length;
while(k >= 0){
  console.log(frontEndDev[k--]);
}

console.log(z2 - z1);


// 역방향 -1)
while(frontEndDev.length){
  console.log(frontEndDev.pop());
}


// 배열의 깊은 복사
let copyArray = frontEndDev.slice();  // 옛날 방식
let copyArray1 = [...frontEndDev];     // 새로운 방식 : spread Syntax
//slice() : 배열의 메서드, frontEndDev 배열의 값들을 통으로 slice 해서 copyArray에 넣는다.