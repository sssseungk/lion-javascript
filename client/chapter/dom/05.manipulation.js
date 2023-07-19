/* -------------------------- */
//* DOM Manipulation           */
/* -------------------------- */
const first = getNode('.first');


//* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

// div를 만들어서 화면에 뿌린다.
let div = document.createElement('div');
div.className = 'box';
div.textContent = '상자';
// console.log(div);

//* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */
// 생성한 div를 넣겠다. => HTML의 h1 태그에 div 태그가 들어가게 된다.
getNode('h1').append(div);

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


// '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


// 특정 위치에 삽입 --------------------------------------------------------- */

//? - insertAdjacentHTML => 자바스크립트로 동적으로 태그를 생성하고 원하는 곳에 뿌리기 위해 사용함
// 형태 : elementNode.insertAdjacentHTML(어디에?,  값);  (position, text=문자열형태로)
const body = document.body; // body에 넣겠다.
body.insertAdjacentHTML('beforeend', '<div class="box">상자</div>')   // 대상의 끝에 이 값을 뿌리겠다.

const h1 = getNode('h1');
h1.insertAdjacentHTML('beforeend', '<div class="box">상자</div>')

// 이렇게 변수에 문자열 넣어줘서 할당해줘도 됨.
// const template = '<div class="box">상자</div>'
// h1.insertAdjacentHTML('beforeend', template);

// 템플릿 리터럴로 변수나 식 받기
const template1 = `<div class="box">${10 + 30}</div>`

// 템플릿 리터럴 + 변수 할당
const template2 = /* html */`
  <div class="box">${ 10 + 30}</div>
  `



// ---------------------------------------------------

//todo :: 배열 함수 만들기!! 
//? 1. 태그를 생성하기 
//? 2. 태그 안에 배열 값 넣기
//? 3. 생성된 태그를 배열로 내보내기
//? 4. 내보낸 배열을 순환하기
//? 5. 반복문안에서 렌더링하기

const data = ['빨래하기', '게임하기', '유튜브보기', '산책하기', '공부하기'];

const todo = getNode('.todo');

// 강아지랑 산책하기만 나열하고 싶다 => filter 사용하기.
//? 1. 태그 생성하기
// (템플릿 리터럴 사용) => <li>${data[0]}</li> => <li>빨래하기</li> 생성됨
// 배열 안의 모든 값 받아오기 위해 배열 메서드 활용(forEach, reduce, filter, amp)
// filter, map => 배열을 반환한다. reduce => 아무거나 반환한다. forEach => 반환값이 없다. 
`<li>${data[0]}</li>`   //? 이렇게 매번 넣으면 불편하니 반복문 활용하기

//? 2. 태그 안에 아이템값 넣기
//? 3. 생성된 태그를 배열로 내보내기
//# todoList : 내보낸 값을 받는 애 
const todoList = data.map((item)=>{   
  return `<li>${item}</li>`    // map은 값을 반환해야돼서 return 문이 필요함
})
console.log(todoList);    // 새롭게 배열을 반환하게 되고, 그 배열을 todoList에 넣어주기. => 그냥 렌더링 하면 리스트 사이에 중간 콤마가 튀어나오게 됨
// 배열의 아이템을 순환시켜서 순수한 글자만 뽑아내자. => 순수한 글자만 뽑을 수 있는 반복문을 다시 만들기 :: forEach문 

//? 4. 내보낸 배열을 순환하기
//? 5. 반복문안에서 렌더링하기
//? 배열을 순환해서 pure text를 골라내기 :: forEach를 사용해보자 (1시 33분)
todoList.forEach((item)=>{
  console.log(item);  // <li>빨래하기</li> <li>게임하기</li>..

  //              타겟                      위치        항목
//? 6. 렌더링하기(h1.insertAdjacentHTML('beforeend', template);
// 가공처리한 todoList를 받아서 뿌린다.
// document.body.insertAdjacentHTML('beforeend', todoList);

//# todo에 li 아이템을 넣으려면?
//  todo.insertAdjacentHTML('beforeend', todoList);
// -> 쉼표도 같이 출력됨. 쉼표 없이 글자만 출력하는 방법
  todo.insertAdjacentHTML('beforeend', item);   // 이렇게 하면 쉼표 없이 출력된다.

  //  insertLast(todo, item);
})



//? insertAdjacentHTML position 속성 위치 
/* 
<!-- beforebegin -->
<p><!-- afterbegin -->
  foo
  <!-- beforeend -->
</p><!-- afterend -->
*/

//? 속성 4가지
// - "beforebegin" – elem 바로 앞에 html을 삽입 (p의 위 영역에 생성)
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입(태그 안쪽 첫 번째 자리에 위치시킴)
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입(태그의 가장 끝에)
// - "afterend" – elem 바로 다음에 html을 삽입(p 다음 가장 바깥쪽)


// ElementNode.insertAdjacentHTML('beforebigin', 'text)
// ElementNode.insertAdjacentHTML('afterbegin', 'text)
// ElementNode.insertAdjacentHTML('beforeend', 'text)
// ElementNode.insertAdjacentHTML('afterend', 'text)


//todo :: insertLast 함수 만들기
// insertAdjacentHTML로 beforeend에 뿌려지는 함수 (node, text)를 인자로 받는다.
function insertLast(node, text){
  if(typeof node === 'string') node = getNode(node);
  
  // ELEMENT_NODE가 아니면 에러 메시지 실행시키기
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforeend', text);
}

insertLast('.todo', '<li>문자</li>')






//? insertAdjacentElement

//? insertAdjacentText
