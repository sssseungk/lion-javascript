function earth(){
  
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;

  // return (value) => gravity = value;
  return function tiger (value){     // 함수 이름은 생략할 수 있다. 호랑이가 지구로부터 내뱉어짐
    // console.log( apple );
    gravity = value;
    
  }
  // return tiger
}

const ufo = earth()   // ufo가 호랑이를 데려감

ufo(5)    // 5    
// 5가 return(value)의 value에 5로 들어간다.
// 밖의 값을 참조할 수 있으므로 gravity = 10;에 5를 다시 재할당해!
// 외게인 🗣️ : 호랑이 너 차원문 통해서 gravity 5로 바꾸고 와.