/* --------------------------------- */
// ! DOM traversal                     */
/* --------------------------------- */

// * DOM(Document Object Mode) : 문서 자체에 접근이 가능한 객체
// * BOM은 브라우저가 가지고 있는 객체 탐색

/* 모든 노드에서 사용 :: 노드 탐색 */
//! 모든 노드를 다 순회하는 명령어들
//? - parentNode : 부모가 누군지 탐색(대상을 선택해야 가능)

//? - childNodes : 자식이 누군지 탐색

//? - firstChild : 첫 번째 자식이 있어? (응 문자여)

//? - lastChild : 너가 가진 마지막 자식 있어? (응 문자야)

//? - previousSibling : 너가 가지고 있는 형재 누구야?
// 내 이전 형제는 그냥 문자야. 

//? - nextSibling


/* 요소 노드에서만 사용 가능 */
// ! 요소 노드만 찾아서 값을 반환시킨다.
//? - parentElement : 부모를 바로 선택

//? - children
// document.body.childNodes 할 경우 가지고 잇는 자식 노드를 다 수집한다. (안에 있는 주석, 빈 공간, 텍스트 등..
// bodydocument.body.children -> 자식 요소만 반환한다.(h1, div, script 등..) => 배열 아니고 유사배열임!
    // -> symol.iterator를 가지고 있어 for of로 순환 가능 

//? - firstElementChild

//? - lastElementChild

//? - previousElementSibling

//? - nextElementSibling : second(다음 element 태그를 찾는다.)


//* 문서 대상 찾기 */
// 문서 대상 찾는 방법
// 1. document에 접근하기 
const message = document.getElementById('message')
console.log(message);


//? ⬇️ 얘네는 과거 유물이라 요즘 많이 사용하지 않음. querySelector를 주로 쓴다. 근데 querySelector보단 성능이 좋아 더 빨리 찾는다.
// 얘네는 id로 받을지, class로 받을지 지정해놨기 때문에 #나 ,를 지정해줄 필요가 없다.
// - getElementById
// - getElementsByTagName
// - getElementsByClassName


// 안에 CSS 선택자가 그대로 올 수 있음( ul > li:nth-child(2) > button)
// 꼭 앞에 클래스.로 잡을건지 아이디 # 로 잡을건지 명시해줘야함.
// ? querySelector -> 단일 대상만 가져온다.
// const first = document.querySelector('.first');
console.log(first);

//? querySelectorAll -> document가 가지고 있는 모든 span을 찍어준다. 
const list = document.querySelectorAll('span');
console.log(list);

// ? closest : 가장 인접한 h1은 누구야? -> 가장 인접한 h1 반환(태그 자체를 가져온다)
//! 안의 자식을 찾는 것이 아닌, 위의 부모를 찾아간다. (위로)
// 이벤트 위임(event delegation)에서 많이 사용한다. 
first.closest('h1');



//* 문서 대상 확인 */
//? matches
// first에 id message가 들어있는게 맞아? => true 반환.
// 선택자 안에 class | id를 가지고 있는 대상이 있어? 
console.log(first.matches('#message'));

//? contains : 선택자의 자식들 중 해당 element가 있는지 확인
// console.log(first.constains(secondSpan));

//? 클래스 포함 여부를 확인 
// 위 contains는 Node.classList.contains()랑 다른 놈이!



//* DOM 탐색을 조금 더 쉽게 하기 위해 유틸 함수 만들어서 처리하는 방법
// querySelector를 유틸함수로 만들기 
function getNode(node){

  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.')
  }

  return document.querySelector(node);
}

getNode('.first')  // <span class="first"></span>

const first = getNode('.first');



// ! getNode 파일 생성해서 코드 옮기기
// DOM.js에다가 노드를 바로 찾기 위해서 DOCUMENT QUERYSELECTOR를 이용핸 GETNODE 유틸 함수를 생성했다.DOCUMENT
// 유틸함수를 일회성으로 쓰는 것이 아닌 LIB 폴더 안에서 따로 관리하게하고
// 그 친구를 HTML에 경로 설정해서 불러오면 
{/* <script src="./lib/dom/getNode.js"></script>
<script src="./chapter/dom/02.DOM.js" defer ></script> */}
// ! script 태그 순서 바뀌면 안됨,. getnode를 불러오지 않은 상태에서 찾는게 말이 안됨. (위가 getnode 불러오는 것)
// 보통 가장 아래에 있는 태그가 main임.
// 앞으로 어떤 JS 파일을 쓰든 간에 
// GETNODE는 계속해서 불러와서 쓸 수 있는 형태가 된다. 