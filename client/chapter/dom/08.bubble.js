/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


//! 버블링, 캡처링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click',()=>{
  console.log('%c section', 'color:orange');   // 콘솔 창 글씨에 색 넣어주기
}, true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c article', 'color:dodgerblue');
}, true)

p.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c p', 'color:hotpink');
}, true)

//* 이벤트 버블링의 문제 : p태그 이벤트를 실행하면 겉에 있는 article, section의 이벤트도 실행된다.
// 클릭하면 이벤트는 깊숙히 푹 찍고 올라오도록 설계되어있어 아래(?) 있는 다른 이벤트도 실행된다. 

//* 이벤트 캡처링 : 뒤의 항목을 true를 준다. 



