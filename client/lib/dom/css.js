function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className)
}


function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  // className이 없을 때 => 아래 조건문보다 위에 선언해줘야한다.(처음에 문자열이 아니라고 간주하고 에러메세지 나타낸다.)
  if(!className){
    node.className = '';
    return;     // 함수릉 종료시켜줘야함!! 꼭 써주기
  }

  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  node.classList.remove(className)
}


function toggleClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.toggle(className)
}

// toggleClass를 화살표 함수로 쓰면?
/* 
const toggleClass = (node, className)=>{
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  // toggle 클래스가 true, false를 반환하기 때문에 return을 써줌..?
  return node.classList.toggle(className)
}
*/



//* css ---------------------------------------------------------------- */
function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}




function getCss(node,prop){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node).getPropertyValue(prop);
}


const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}