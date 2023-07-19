/* -------------------- */
//* DOM Styling          */
/* -------------------- */


//* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className);   // getter
// console.log(first.className = 'box');   // setter : 클래스 이름 변경
// console.log(first.className = 'box second');   // 띄어쓰기로 넣으면 클래스 여러개 넣을 수 있음. 하나만 넣으면 이전 클래스명을 덮어써서 이전 클래스는 사라지게 된다.
// console.log(first.className = 'second');


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//todo :: 종류!!!!!! -> add, remove, toggle, contains 
// ? add : 추가
first.classList.add('hello')   // 기존 클래스명은 냅두고 새로운 클래스가 같이 추가된다. class="first hello"

//? remove : 제거
// first.classList.remove(' ');  // 해당 클래스를 제거한다.
// remove로 아무 값도 전달하지 않으면 아무일도 발생x, 빈문자열이나 띄어쓰기 전달하면 에러 발생
// ! 지워줄 대상 이름을 정확히 적어줘야한다.

//* 여러개 클래스명을 한번에 다 지우려면? remove는 하나만 지울 수 있음. 
//? 1. className 사용하기
// first.className = '';   // 빈 문자열 줘서 모든 클래스 제거하기
//? 2. attr 사용하기
// attr(first, 'class', ' ');



//? toggle
// isactive가 없으면 넣어주고 있으면 빼준다
// toggle 클래스는 boolean 값을 반환된다.(추가되면 true, 지워지면 false)
first.classList.toggle('is-active');



//? contains : 포함 여부 확인(조건문에서 많이 사용)
// first element에 hello 클래스가 포함되어 있어? 
console.log(first.classList.contains('is-active'));


//! 함수 만들기-------------------------------------------------
//todo : addClass 함수 만들기
/* 
function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className)
}

addClass('.first', 'hello');
*/


//* 스타일 변경 방법 --------------------------------------------------------- */
//? .style  => setter는 되지만 getter는 getComputedStyle을 써줘야 함.
console.log(first.style);
first.style  // css가 정의되어있는 객체를 반환한다 => first가 가지고 있는 모든 style 메소드, 프로퍼티를 나열해준다.
first.style.backgroundColor = 'skyblue';   // first의 배경색 변경하기 (setter)
console.log(first.style.backgroundColor);  // skyblue (getter) => 얘는 js코드에서 위에 직접 색을 할당해줬기 때문에 보이는 것.
// 스타일을 입히지 않은 상태에서 값을 가져와서 first.style.backgroundColor하면 빈 문자가 나온다. 
// console.log(first.style.fontSize);   // 빈문자 나옴 
// ⬇️ 해결 방법 : getComputedStyle

//style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


//* 계산된 스타일 읽기 ------------------------------------------------------- */
//? getComputedStyle(element, [pseudoElement]) `읽기 전용`
//? 처리가 완료된 이후의 값을 가져온다.
// console.log(getComputedStyle(first).fontSize);   // 40px

// 더 명시적으로 작성하기
// css에 계산된 값들 중에 이 property(fontsize)의 value를 내가 get 하겠다.
// console.log(getComputedStyle(first).getPropertyValue('font-size'));   // 40px
// console.log('으아ㅏㅏㅏㅏㅏㅏ');
// console.log(getComputedStyle(first).fontSize);   // 40px


// ! 요약하면?
// style에 접근하기 위해 style을 사용하는 법은 setter역할은 가능, getter역할은 수행 못함
// 계산되기 이전의 값을 가져와서 전부다 빈 문자를 반환하게 됨
// => getcomputedstyle 사용하기 :: 계산된 객체를 통째로 반환한다(<=(getComputedStyle(first)). 
// 그 객체의 메서드를 다시 호출해서 명시적으로 하기


//todo :: 유틸함수 만들기 -------------------------------------------------------
// ! 객체의 속성에 접근할 때 .표기법은 사용할 수 없다.
// node.style.prop = value; 이렇게 하면 안됨
// ! computed property[]를 사용해야 함

// function setCss(node, prop, value){
//   if(typeof node === 'string') node = getNode(node);

//   //? prop에 들어간 값이 옳은 css 속성인지 확인해야함
//   // 객체 안에 키 값이 있는지 확인하는 방법 => ex. 'color' in document.body.style
//   if(!(prop in document.body.style)){
//     throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
//   }

//   //? setter인데 value 값이 안들어오는 말이 안되는 경우 조건처리
//   if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');
   
//   node.style[prop] = value;
// }

// setCss('.first', 'color', 'pink');

// //todo :: css.js에 getCss 함수 만들기
// console.log(getCss('.first', 'color'));

// //todo :: getCss, setCss 함수를 포함하는 css 함수 만들기 
// css('.first', 'color', 'green');
// console.log(css('.first', 'color'));


