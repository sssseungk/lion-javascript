/* ------------------------------------ */
//* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

//? 속성과 프로퍼티의 차이는 ? : HTML에서 쓰는 것 = 속성 / js에서 쓰는 것(DOM객체 안에서 쓰임)= 프로퍼티 => HTML에서 쓴 속성이 표준이라면, 객체에 접근했을 때 사용할 수 있는 값.
  // 프로퍼티 모든 타입 가능, 속성 : 문자열
//* HTML 속성 ------------------------------------------------------------- */

//? 브라우저는 웹페이지를 만나면 HTML을 읽어(파싱) DOM 객체를 생성한다. =>js 엔진이 html을 객체화 시켜서 dom 객체를 만들고 화면에 뿌려준다.
// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다.
// 태그 <body id="page">가 있을 때, DOM 객체에서 body.id="page"를 사용할 수 있다. (HTML 속성과 DOM 프로퍼티가 1:1 매핑이 됨)
// => 접근 가능한 이유 : 표준 속성으로 인식했기 때문 
// HTML의 모든 속성이 다 프로퍼티가 되는 것은 아님. 표준으로 인식되지 않는 비표준속성은 DOM객체로 생성하지 않는다.

//? 표준 속성이 아닌 경우, 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

// DOM 탐색해서 대상 가져오기
const first = getNode('.first');
const second = getNode('.second');
// 속성을 JS로 가져와서 핸들링한다.
console.log(first);      // <span class="first" id="message">hello</span>
console.dir(first);
console.dir(first.id);      // message
console.dir(first.class);   // class를 가지고 있음에도 undefined가 나온다. :: 이미 JS에는 CLASS라는 문법이 있기 때문에 중복되는 것을 막으려고 실제 HTML의 CLASS에 접근할 땐 CLASSnAME으로 접근해야한다.
console.dir(first.className);    // first

//? 항상 1:1 매핑되는것은 아니다. (표준 속성이 아니라고 인식할 경우)
console.log(first.size);   // size 프로퍼티를 가지고 있지 않다. 표준 속성이 아니라고 인식해서 매핑하는 DOM 프로퍼티를 생성하지 않음.


//* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


//* DOM 프로퍼티 검토 ------------------------------------------------------- */
// elementNode에게 쓸 수 있는 것들
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

//? hasAttribute
// first에 class라는 속성을 가지고 있어? -> true/false (표준/비표준 상관없이)
// console.log(first.hasAttribute('class'));   // true
// console.log(first.hasAttribute('title'));   // false

//? getAttribute : 특정 대상의 속성값을 가져올 때 사용하는 메서드
// first에 class 속성을 가져와줘!
// console.log(first.getAttribute('class'));    // first
// console.log(first.getAttribute('size'));     // 10

//? setAttribute : 속성의 이름과 그에 따른 값이 필요하다.
// first 대상에 title이라는 속성을 메시지로 세팅하겠다.
// second.setAttribute('title', '메시지');   // <span class="first" id="message" size="10" title="메시지">hello</span>
// first.setAttribute('class', 'second');  // class 이름을 second로 바꿔준다. => 기존 first 클래스는 사라진다. => 위험

// first.className, first.id, first.title은 접근 가능하지만 first.size는 접근 안돼서 undefined가 나온다.

//? removeAttribute : 지우기
// first.removeAttribute('data-size');  // <span class="first" id="message" size="10">hello</span>
// first.removeAttribute('data-size');


//? setAtribute로 지울 수도 있음 -> 속성 이름까지 지우고 싶다면 removeAttribute 쓰기
// first.setAttribute('title', '');

//? attributes.
// element node가 가지고 있는 모든 속성과 값을 나열해서 객체로 반환해준다.
// Symbol.interator을 내장하고 있음
console.log(first.attributes);
// 반복문 돌리기
for(let value of first.attributes){
  console.log(value);
}




//* 함수 만들어보기-------------------------------------------------------
//todo :: getAttr 유틸함수 만들어보기
// 기존 방법 : 하나하나 first.getAttribute('id')로 불러오기
// 함수로 만들기
//! 0. 넘어온 대상이 문자인지 체크
//! 1. 체크 후 ELEMENT NODE로 변경해주기
function getAttr(node, prop){
  // const node = '.first';
  // const prop = 'id';   => 매개변수에서 선언해줘서 필요없음(?)

  // 문자에 getAttribute하는건 말이 안되기 때문에 조건처리해줘야 함
  //? 전달받은 노드 값이 string일 때 넘어온 문자를 ELEMENT nODE로 변경해주기
  if(typeof node === 'string'){
    node = getNode(node);  // getNode : 문자를 가져다가 document.querySelector에 넣어서 실제 elementNode를 반환하는 애
  }
  return node.getAttribute(prop)
}
console.log(getAttr('.first', 'id'));



//todo :: setAttr 유틸함수 만들어보기
//first.setAttribute('title', '메시지');
function setAttr(node, prop, value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  // 전달받은 prop 타입이 string이 아니라면 Error 발생
  // if(!(typeof prop === string)) 이렇게 써도 됨
  if(typeof prop !== 'string'){
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.')
    // 에러메시지는 에러가 난 함수로 시작하는게 좋다! => 디버깅이 훨씬 쉬움
  }

  // prop을 비표준 속성으로 넣었을 때  data-으로 처리해주기 + class인 상황 제외하고 넣어주기(class를 넣으면 data-class가 들어가게 된다.)
  // 넣으려는 비표준 속성이 안에 없거나 클래스가 아닐 때,
  if(!node[prop] && prop !== 'class'){
    node.dataset[prop] = value;
    return;     // 여기서 값 반환하고 함수 종료
  }

  // SET은 기능만 수행할 뿐, 수행 결과값을 사용자가 받을 필요는 없으므로 SET이 필요가 없다.
  node.setAttribute(prop, value);
}

// setAttr('.first', 'title', '인사멘트');
// setAttr('.first', 'class', 'second');
// class를 재정의 하려고 한다.
// class이름 바꾸려고 이렇게 넣으면 data-class로 들어가게 된다.(클래스이름은 className으로 넣지 않으면 undefined를 반환하기 때문)
//first.class는 undefined가 뜨기 때문에 if문이 실행되는 것.
// setAttr('.first', 'class', 'second');  



//todo :: attr 함수 만들기
// value가 있으면 setter(setAttr), 없으면 getter(getAttr)가 되는 함수
function attr(node, prop, value){

  // value가 없으면 getAttr 함수 실행 (node의 prop 이름을 가져다줘.)
  if(!value){
    // 함수 값을 return해줘야함. 안하고 호출하면 undefined
    return getAttr(node, prop)
  }
  // value가 있으면 setAttr 함수 실행
  else{
    return setAttr(node, prop, value);
  }


  //? 삼항식으로 줄여쓰기(if-else문을 삼항식으로!!)
  // getAttr에서는 반환값이 나오기 때문에 return으로 값을 반환해줘야함 
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

// attr('.first', 'class)  이렇게 호출했을 때 인자에는 3개가 있으므로 value값이 없어 indefined가 나옴 => 문제 발생
// atrr('.first', 'class', 'second')



//TODO 위 함수를 화살표 함수로 바꿔주기
//const arrowAttr = (node,prop,value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);



//------------------------------------------------------



//* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */
// 비표준을 표준처럼 만들어서 가져오는 방법 :: data-
// ? data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.(비표준속성이어도 DOM의 프로퍼티로 들어가게 된다. )
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.
// - elementNode.dataset (dataset 프로퍼티 안에 data-으로 적은 모든 내용을 객체로 저장시킨다.)
// dataset을 통해 값을 얻어올 수 있다.
console.log(first.dataset);   // DOMStringMap {size: '10', tabIndex: '1'}
console.log(first.dataset.size);   // 10

console.log(first.dataset.tabIndex);   // getter
console.log(first.dataset.animation = 'pause'); // setter :: 할당 연산 기능으로 값을 세팅해 속성이 추가된다. 
// 결과값 : <span class="first" id="message" data-size="10" data-tab-index="1" title="" data-animation="pause">hello</span>