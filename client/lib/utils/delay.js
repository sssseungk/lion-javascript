

// callback : 함수 실행 흐름을 늦춰서 좀 나중에 실행한다.

import { getNode } from "../dom/getNode.js";


function delay(callback, timeout=1000){
  setTimeout(callback, timeout);
}



// console.log(1);

// 함수 본문을 delay의 callback으로 던져서 실행시킨다.
// 비동기코드 (2초 뒤에 실행됨)
// delay(()=>{
//   console.log(2);
// }, 2000)

// console.log(3);


const first = getNode('.first');
const second = getNode('.second');




//* 글씨가 올라간 후 돌고 내려오게 하고 싶다! 
// //* 콜백의 문제점 예시, => 더 깔끔하게 만들기 위해 promise를 사용한다.
// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//   })
// })




// delayP 함수를 실행하면 리턴되는 값이 promise 객체이다.
function delayP(){
  
  // 프라미스 객체를 리턴한다.
  return new Promise((resolve, reject) => {
    resolve('성공입니다!!!')

  })

}

// 프라미스 객체가 나왔기 때문에 뒤에 then절을 쓸 수 있음
delayP().then((result)=>{       // 프라미스 객체 반환
  console.log(result);

});    