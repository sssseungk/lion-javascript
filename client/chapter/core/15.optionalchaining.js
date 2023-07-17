/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// photos가 없으므로 에러가 발생 => photos?.animate라고 적어주면 에러 발생하지 않음
console.log(portableFan.photos?.animate);

// 이렇게 함수로 쓰기도 한다.
if(portableFan.photos === 'undefined'){
  throw new Error('에러!')
}

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.




// sync 동기    async 비동기
// ? 윈도우가 가지고 있는 메서드(window.setTimeout)
// 콜백함수, 초(ms) :: 3000=3s, 

console.log('첫 번째 실행');

setTimeout(()=>{
  // console.log('en qjsWo tlfgod');
}, 3000);


// ? setInterval 메서드 
setInterval(()=>{
  console.log('반복 실행');
}, 1000)


// 멈추는 거 코드
const timer = setTimeout(()=>{

  const button = /* html */`
    <button type="button">clickMe</button>
  `

  document.body.insertAdjacentHTML('beforeend',button);

},5000)


clearTimeout(timer)




const button = document.querySelector('button');

console.log( button );

button.addEventListener('click',function(){
  this.style.backgroundColor = 'orange';
})
