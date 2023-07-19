/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */
const buttonA = getNode('.a');

// buttonA.addEventListener('click', ()=>{
//   console.log('hit');
// })


// const buttons = getNodes('button');
// buttons.forEach(()=>{
//   ClipboardItem.addEventListener('click',()=>{
//     console.log('hit');
//   })
// })



//! 이벤트 위임 : 제일 큰 부모에게 클릭 이벤트를 걸고, 자식들이 이벤트를 받아갈 수 있도록 하는 형태
// const container = getNode('.container');

// function handleDelegation(e){

//   let target = e.target;
//   // console.log(target);
//   let className = target.getAttribute('class');
  // ⬇️ attr로 작성하기 :: 타켓의 클래스를 담아와줘
  // let className = attr(target,'class');

  // class 속성을 가져와줘 (a, b, c, d, container)
  // attr로 작성했을 때 : if(className === 'a)
  // if(target.getAttribute('class') === 'a'){
  //   console.log('A 버튼 클릭!');
  // }

  // if(target.getAttribute('class') === 'b'){
  //   console.log('B 버튼 클릭!');
  // }

  // if(target.getAttribute('class') === 'c'){
  //   console.log('C 버튼 클릭!');
  // }

  // if(target.getAttribute('class') === 'd'){
  //   console.log('D 버튼 클릭!');
  // }
  // console.log(e.target);    // == e.currentTarget / 결과값 : div class="container" 태그. :: 일반함수이기 때문에 나를 호출한 container가 this이다.
  // arrow function일 때 this는 window.
  // console.log(e.currentTarget);
  // 화살표 함수를 사용할 때 this를 찾지 못하면 e.currentTarget을 쓰면 this처럼 사용할 수 있다. 
  // console.log(e.target);
//}

//? e.currentTarget : 이벤트가 걸리 대상을 수집해옴. 일반함수일 땐 this와 같다.  / e.target : 내가 누른 대상을 수집해옴. 마우스가 제일 처음 만나는 대상을 target으로 담는다.


// attr로 짧게 작성
// function handleDelegation(e){
// 	let target = e.target;
// 	let className = attr(target, 'class');

// 	if(className === 'a'){
// 		console.log('A 버튼 클릭!);
// 	}
// 	if(className === 'b'){
// 		console.log('A 버튼 클릭!);
// 	}
// 	if(className === 'c'){
// 		console.log('A 버튼 클릭!);
// 	}
// 	if(className === 'd'){
// 		console.log('A 버튼 클릭!);
// 	}
// }

// function handleDelegation(e){
//   let target = e.target;
//   let className = attr(target, 'class');
//   // let dataName = target.dataset.name;
//   let dataName = attr(target, 'data-name');

//   if(dataName === 'A'){
//     console.log('A버튼 클릭');
//   }
// }

// container.addEventListener('click',handleDelegation)



//? closest()
// li 태그 안에 span, button 태그가 존재한다. => 큰 li를 버튼으로 인식함.
// 버튼을 클릭하면 span, button, li 태그가 혼동돼서 뜬다.
// target은 누른 첫 번째 대상을 알려준다. 대상의 클래스를 받아오려고 하면 li뿐만 아니라 그 안의 다른 태그들도 수집하게 됨 => closest를 이용하기 
// 글자를 누르면 button, 아이콘 누르면 span, 이도저도 아닌 공간 누르면 li 태그 반환
const container = getNode('.container');

function handleDelegation (e){
  let target = e.target;

  let li = target.closest('li');   // 가장 가까운 li(인접한 부모)를 찾아서 li에 넣어준다. (인접한 li가 없는 경우는 에러 발생)

  if(!li) return;    // li가 없다면 함수 종료하기

  console.log(li);

  let className = attr(li,'class');
  let dataName = attr(li, 'data-name');

  // console.log(className);
  //console.log(target.closest('li'));  // 안의 자식을 클릭해도 인접한 li를 찾는다.

  // 아이콘, 글씨 제외 공간을 클릭해야만 출력됨 => elementNode.closest
  //! elementNode.closest('div') : 선택한 대상에서 나보다 위에있지만 가장 가까운 div를 찾아줘
  // => home 보튼 어딜 클릭해도 li가 출력된다. 
  if(className === 'home'){
    console.log('홈 실행!');
  }
}

container.addEventListener('click',handleDelegation)


//* closest를 해준 후 컨테이너 영역을 누르면 에러 발생!!
//* => 가장 인접한 li가 없는 경우 에러 발생.


//* 전체 흐름
// 누른 대상을 정확히 체크하기 위해서 브라우저가 만들어주는 이벤트 객체가 필요하다.
// 이벤트 객체를 만들어서 e.target을 하면 가장 먼저 클릭한 대상을 타겟으로 삼는다.
// 밖을 클릭하면 원하는 li에 접근 가능하지만, 안에 대상을 클릭하면 이벤트 타겟이 
// 다양한 애들을 수집해온다.
// 안쪽 span, button을 클릭해도 list를 불러오게끔 closest가장 가까운 부모 li를 찾는다.
// => 문제점 : 밖의 컨테이너를 클릭하면, 컨테이너 밖에는 li가 없기 때문에 null값을 반환한다.
// null값을 attr/getAttribute 하는 상황 자체가 에러 발생 => 해결 위해 조건문 만들기
// 조건문을 통해 인접한 리스트가 없을 때 함수 종료시킨다.






/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */