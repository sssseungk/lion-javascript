/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */
// ! BOM이 가지고 있는 기능들 탐색하기 

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


//* Window는 전역에 있는 객체 ----------------------------------------------------------- */
// widnwo 객체에는 우리가 쉽게 쓸 수 있는 여러가지 메서드를 정의해놓고 제공해준다.
// -> alert, confrim... => API (WINDOW에 포함된 능력.)
// + setTimeout은 코드 실행 흐름을 강제로 바꿀 수 있다. (clearInterval : 함수 중지)

// 객체 구조분해할당(window가 가지고 있는 API 종류)
const { alert, confirm, prompt, setTimeout, setInterval } = window;

console.log(1);


// callback, debounce 

// console.log(3);


const cancelInterval = setInterval(()=>{
  // console.log('이 코드는 1초마다 실행되는 코드입니다.');
},100)


const timer = setTimeout(()=>{
  // console.log('몇초 뒤에 해당 코드가 작동합니다.'); 
  // console.log(2);
  // clearInterval(cancelInterval)
  
},5000)






//* Location 객체 --------------------------------------------------------- */
// http://localhost:8000/index.html?type=listing&page=2#title

// http: 프로토콜 (protocal)
// http://localhost 호스트 (host)
// http://localhost:8000 포트넘버 (port)
// http://localhost:8000/index.html 경로명 (pathname)
// http://localhost:8000/index.html?type=listing&page=2 검색 (search)
// http://localhost:8000/index.html?type=listing&page=2#title 해시 (hash)


// * location 객체가 가지고 있는 것들
const { href, protocol, host, port, search, hash, replace, reload } = location;

// 원래는 window.location.host 이렇게 접근해야함
// 지금은 구조분해할당해서 그냥 host만 써도 접근된다.

// ? search : 검색된 결과값을 찍어준다('?type..='_) -> 재할당 가능(location.search = '바나나')
// ? has는 뒤의 hash값.
// ? replace : 원하는 곳으로 이동해준다. location.replace('https:..')
// ➡️ location.href = "http.."랑 비슷하다. 차이점은 replace는 뒤로가기가 안된다.(검색 내역이 남지 않는다는 뜻.). .href는 뒤로가기가 된다.
// ? location.reload : 새로고침. 


// 생성자 안에 담고있는 search를 집어넣으면 값을 만들어준다.
const urlParams = new URLSearchParams(location.search);
for(const value of urlParams){
  console.log(value);
}
// ⬇️ 구조분해할당으로도 뽑아낼 수 있다.
for (const [key,value] of urlParams) {
  console.log( key,value );
}





//*  Navigator 객체 -------------------------------------------------------- */


//? platform : 브라우저가 실행되는 플랫폼 정보를 반환 (컴퓨터 정보)
//? userAgent : 브라우저와 운영체제 정보를 반환
//? language : 브라우저에서 사용되는 언어를 반환
//? onLine : 브라우저가 온라인인지 여부를 반환 
//? geolocation

console.log( );

// naviager 객체가 제공해주는 기능들 
const { platform, userAgent, language, onLine, geolocation } = navigator;

// 사용자의 브라우저 체크하기
// 있으면 몇 번째 인덱스에 있는지 반환함, 없으면 -1을 반환함 
// if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
  
// }


// 사용자가 어떤 브라우저를 사용하는지 체크해서 결과값을 내보내는 유틸함수
function browserName() {
  const agent = userAgent.toLowerCase();

  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

browserName();

// coords 안에 위도와 경도가 들어있음
geolocation.getCurrentPosition((data)=>{
  console.log(data.coords.latitude);  // 37.5.. 위도 출력
  console.log(data.coords.longitude);  // 127.07.. 경도 출력
})


// 
function getLocationPosition(){

  // 약속하는 구문 => return 대신 reslove 넣어주기. 에러났을 때의 환경 reject로 처리해주기
  // 여기서의 약속 : 위치서비스를 가져온다면 그 값을 내가 쓸 수 있게 제공해줘
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data)=>{

      // 위치 서비스 비활성화이면
      if(!data){
        reject({message:'위치 서비스를 활성화 해주세요.'})
      }else{
        // 구조 분해 할당으로 가져오기 
        const {latitude,longitude} = data.coords;
        console.log(2);
        resolve({latitude,longitude})
      }
    })
  })
}



//* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


//? height: 모니터 사이즈
//? availHeight : 브라우저의 크기
//? innerHeight : 브라우저 해상도 크기 (window에 속해있는 속성! screen에서 제공해주는 기능은 아님)
//   ➡️ css의 100vh랑 똑같음
// 가장 많이 쓰는건 창 크기를 계산해야할때 innerHeight를 가장 많이 쓴다.
//? orientation 
// orientation.type -> landscape-primary(모니터가 가로방향) portrait-primary(모니터가 세로방향 )





/* History 객체 ---------------------------------------------------------- */
// history : 방문내역 관리 
// history.back(뒤로가기), history.forward(앞으로가기 : 이전에 들른 창), history.go(앞뒤로 얼만큼 갈건지))
// length : 브라우저에서 가지고 있는 history가 몇개인지 확인
const { back, forward, go, length, pushState, replaceState } = history;
// pushState, replaceState는 알아서 찾아보기 

// navigator 자체에 있는 기능 mediaDevices
// 브라우저에 카메라 띄우기 
navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
  
  document.querySelector('#videoElement').srcObject = stream;
  
})



// ssr
// csr