
//! 모듈 프로그래밍
// getNode.js에서는 함수 앞에 export 써주기
//? getNode 가져오기 ( 저 파일 위치에서 getNode를 가져오기) => 함수 본문을 넘겨준다.
import { getNode, clearContents, insertLast } from './lib/index.js';


//! [page-1] : firstValue, secondValue값을 입력 받고, 합을 구해서 결과를 출력하기
const first = getNode('#firstNumber');     // 첫 번째 숫자 넣는 input
const second = getNode('#secondNumber');   // 두 번째 숫자 넣는 input
const result = getNode('.result');
  
function handleInput(){ 
  
  //? 1. input value 값 가져오기
  let firstValue = Number(first.value);  // +first.value  first.value / 1 => 숫자로 변환하는 다른 바ㅏㅇ법
  let secondValue = Number(second.value);
  
  //? 2. 두 수의 합 더하기
  let total = firstValue + secondValue;
  
  //? 기존값 제거해주기
  // 렌더링할 때 기존값을 제거해줘야 새로운 값을 넣을 수 있다. => clearContents 필요
  clearContents(result);
  
  //? 3. result 출력하기
  //? 계산된 새로운 값 넣어주기 
  insertLast(result, total);
}

//! [page-2] : clear 버튼 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요.

  //? 1. clear 버튼을 가져온다.
const clear = getNode('#clear');


function handleClear(){

    //? 3. firstValue 값을 지운다.
    clearContents(first);

    //? 4. secondValue 값을 지운다.
    clearContents(second);

    //? 5. result의 값을 지운다.
    clearContents(result);

    //? 6. result에 - 값을 넣는다.
    result.textContent = '-';
}


//? 2. clear 버튼에 이벤트 핸들러를 연결한다.
clear.addEventListener('click', handleClear)
first.addEventListener('input', handleInput)    // input 이벤트 실행시키기 
second.addEventListener('input', handleInput)

































//! [page-3]
//? 이벤트 위임으로 변경하기
// function page2(){


//   const calculator = getNode('.calculator');
//   const clear = getNode('#clear');
//   const result = getNode('.result');
//   const numberInputs = Array.from(
//     getNodes('input:not(#clear)')
//   )
  
//   console.log( numberInputs );
  
  
//   function handleInput(){
    
//     const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
  
  
//     console.log(  );
  
//     clearContents(result);
//     insertLast(result,total);
    
//   }
  
//   function handleClick(){
  
  
//     numberInputs.forEach(clearContents);
//     result.textContent = '-'
//   }
  
//   calculator.addEventListener('input',handleInput);
//   clear.addEventListener('click',handleClick);
  
//   // [page-3]
//   // 위 내용을 이벤트 위임으로 변경 
//   // .calculator 이벤트 input 
  
  
//   }
