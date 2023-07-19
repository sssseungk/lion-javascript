
//! bindEvent 함수

function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }
(/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)

  // 존재하지 않는 type을 넣었는지 조건 처리 
  // test(type) 값이 정규 표현식에 존재하면 true 반환  
  if(!(/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);

  // 함수를 내보낸다. 
  return()=>{
    return node.removeEventListener(type,handler);
  }
  // 화살표 함수로 작성
  // return() => node.removeEventListener(type, handler);
}
