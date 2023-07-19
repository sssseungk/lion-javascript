/* --------------------- */
/* Event Handling        */
/* --------------------- */


//! 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

//? 1. HTML 속성(HTML 자체에 걸기) : onclick="handler()"


//? 2. DOM 프로퍼티 : element.onclick = handler
// const first = getNode('.first');

// function handler(){
//   console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
// }

// first.onclick = handler;



//? 3. 메서드 : element.addEventListener(event, handler[, phase])
//* 이벤트 종류 : click, mousemove, mouseover, mouseout, mousedown, mouseup



//! 이벤트 추가/제거 --------------------------------------------------------- */
// 이벤트는 추가해주는 항목이 있으면 제거해주는 항목도 있어야 한다. 그렇다고 제거항목 항상 필요한 건 아님.

//? addEventListener와 removeEventListener

// function handleClick(){
//   console.log('이벤트 메서드를 호출합니다.');
// }

// first.addEventListener('click', handleClick);



//? bindEvent 유틸함수 활용하기(bindEvent.js에 만듦)
// const remove = bindEvent('.first', 'click', handleClick);   
// console.log(remove);   // 함수 본문이 튀어나온다. 
// remove()  // 이렇게 제거할 수 있음. 


// 특정 상황에서 이벤트 제거하는 코드 : setTimeOut
setTimeout(()=>{
  //first.removeEventListener('click', handleClick)
  // remove()
}, 3000);



//? 이벤트는 본인들이 가지는 이벤트 객체가 존재한다.
//! 이벤트 객체 : 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만들어 낸다.
//! 이 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.


// function handleClick(e){   // (e, ent, evt) : 이벤트 객체를 받음 
//   // console.log(this);    // this == e.target :: <span class="first" "="">hello</span>
//   // console.log(e);          // PointerEvent 이벤트 객체 반환
//   console.log(e.offsetX, e.offsetY);  // 23, 17, 22.. :: 태그 영역 안에서 마우스를 클릭한 지점 (X좌표)
// }

// first.addEventListener('click', handleClick);  // 이벤트를 생성하면 이벤트 객체를 자동으로 만들어줌. 여러 정보를 편하게 쓰라고.












// ! DOMContentLoaded와 defer
// 위부터 읽고 내려가다가 scrip까지 읽은 상태에서 document에 접근해서
// first를 찾으라고 되어있는데, html 입장에서는 아직 아래를 못읽어서 first를 못찾음
// 따라서 defer를 쓰지 않으면 first를 입력했을 때 null이 나온다
// => 해결 방법 1. 이벤트 사용 : 모든 돔 요소들이 로딩이 끝났다면 그 다음에 아래 코드를 실행시켜줘 (돔요소 렌더링 끝난 후 함수가 실행됨)
// window.addEventListener('DOMContentLoaded', ()=>{
//   const first = document.querySelector('.first')
// })

// => 2. defer 사용 : 파싱하다가 script 태그 만나는 순간 html 파싱을 멈추고 js 파일을 읽어서 실행한다. 
// html은 html대로 파싱하고, html 멈춘 구간 없이 중간에 아무때나 들어와서 script가 영역을 읽고
// script를 읽고 바로 실행하는 것이 아닌 먼저 다 불러오고 마지막에 html 파싱이 끝난 시점에서 스크립트를 실행한다.


//! 이벤트 객체 사용 예시 -----------------------------
const ground = getNode('.ground');
// ground.addEventListener('click', handleClick);


// function handleClick(e){
  
//   // 클릭한 좌표값을 가져옴
//   let x = e.offsetX;
//   let y = e.offsetY;

//   // 클릭한 좌표값으로 공이 이동함
//   // ball.style.transform = `translate(${x}px, ${y}px)`;
//   // 마우스 클릭 정중앙으로 공이 오게 하기 (공의 가로 세로 절반만큼 빼주기)
//   ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px, ${y - (ball.offsetHeight / 2)}px)`;
// }

ground.addEventListener('click',handleClick);



//! debounce, throttle 
// //? debounce : 사용자가 무언갈 하고 있으면 절대 실행하지 않는다.
// //? throttle : 특정 시간마다 실행하도록 한다.
// 아무의미없이 계속 mousemove를 실행하는 것 보다는,
// 함수를 덜 불러와서 성능의 부하를 덜 일으키기 때문에 debounce, throttle을 사용한다. 


ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));
