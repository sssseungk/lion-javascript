/* ------------------------------ */
//* DOM Node Class                 */
/* ------------------------------ */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement



// 태그 하나 생성하려는건 
// 조상 Object부터 이벤트 기능을 부여해주고, 거기에 노드가 텍스트 노드인지
// 주석노드인지 element node인지 구분. element node라면 element 값을 넣어주고
// 걔가 다시 htmlElement인지 svgelement인지 나눠서 할당해주고, 필요한 태그들(body, input, span..)이 제일 아래서 나눠져서 하나의 태그가 완성된다. 

/* ------------------------------------------------------------------------ */

// EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.

// Node가 제공해주는 기능들
// Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.

// Element만(요소들만) 순회해야할 때 Element가 능력을 제공해준다. 
// Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


// HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.
//               HTMLInputElement – <input> 요소에 대응하는 클래스
//               HTMLBodyElement – <body> 요소에 대응하는 클래스
//               HTMLAnchorElement – <a> 요소에 대응하는 클래스 
                    //? href=""는 HTMLAnchorElement가 태그에 대한 능력을 상속해준다.




//* 노드 정보 ------------------------------------------------------------- */

//? nodeType

const first = getNode('.first');
//console.log(first.nodeType === document.ELEMENT_NODE);
//console.log(first.nodeType === 1);


//? - nodeName (vs. tagName)
//console.log(first.nodeName);    // SPAN : 대문자로 반환한다.
//console.log(first.nodeName === 'SPAN');    // 비교도 대문자로 해줘야함
//console.log(first.tagName === 'SPAN');    // 'SPAN'
// nodeName : 노드의 이름 조회. 앞 대상이 태그가 아니라 주석이라도 출력해준다.  
// tagName : 태그일경우에만 출력, 태그가 아니면 null. 태그의 이름을 정확하게 알려준다. 


//* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

//? innerHTML:: 요소 자체에 HTML 태그를 추가할 수 있는 기능
// 노드에 접근해서 노드 안의 속성값을 마음대로 변경시킬 수 있다.
// HTML 태그 자체를 삽입하는거라서 위험하다 (script 태그 넣어서 해킹 발생할 수도)
// first.innerHTML = 'helloooooo';

first.innerHTML += '<div>aa</div>';



// * 기존 내용 삭제
first.innerHTML = ''

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += '<div>안녕!</div>';


// - textContent : 태그를 강제로 추가하는 것이 아니라서 innerHTML보다 안전하다.
// * 요소 내의 텍스트에 접근해서 텍스트 글자를 변경한다.
// first.textContent 
console.log(first.textContent); // getter
console.log(first.textContent = 'hola!'); // setter


// * 태그는 제외하고 오로지 텍스트만 추출


// hidden -------------------------------------------------------------- */

//* hidden
// hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능(1:1매핑이 된다.)
// ! hidden은 HTML이 가지고 있는 속성이기 때문에 DOM 프로퍼티에 접근해서 핸들링할 수 있다. 
// hidden 프로퍼티는 기술적으로 style="display:none"와 동일

const h1 = getNode('h1');
h1.hidden = true;   // 태그를 숨겨준다. <h1 hidden>


// toggle 왔다갔다 시키기
// let toggle = false;

// setInterval(()=>{
//   h1.hidden = toggle? false:true;
//   toggle = !toggle;

// }, 100)