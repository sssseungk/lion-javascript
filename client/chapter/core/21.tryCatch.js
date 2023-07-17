/* ---------------------------------------------------------------------- */
/* Try Catch                                                              */
/* ---------------------------------------------------------------------- */

// ! try...catch :: 예외 처리 
// * try...catch가 필요한 이유
/* 
개발자가 짠 코드는 바로 실행되는 것이 아닌, 사용자가 어떤 인터렉션(행동 : 버튼 드래그 등)을 했을 때 코드 로직이 실행되는 구조로 짜면
사용자가 의도하지 않게 버튼을 한 번이 아닌 광클하는 것 같은 예기치 않은 상황 발생
사용자가 어떤 행동을 할 지 모르기 때문에 안전하게 만들기 위해 그 행동에 대한 '만약'이라는 코드를 심어줘야 한다.
에러가 발생했을 때 자바스크립트는 마비가 되기 때문에 아무 코드도 작동하지 않아 먹통이 됨.
=> 에러 방지하고자 '이 부분이 에러가 발생하면 그 다음 항목을 넘겨서 처리해줘~' 같은 안전한 코드를 작성한다.
=> try..catch로 작성
*/

// * try...catch문 작성법
// * try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감

try{
  // 시도하는 코드
}catch(e){
  // 아무일 발생하지 않으면 catch절을 읽지 않고 넘어간다.
  // 시도한 내용중 오류가 발생하면 에러를 catch해서 사용자가 핸들링할 수 있는 환경을 제공한다.(너가 이런식으로 에러를 대치해야돼!)
}

// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// ! 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름


// * try catch문 작성해보기
try{
  let a = 5; 
  // a + b;      // b가 없어서 에러가 발생함 
} catch(e){          // try 절에서 나오는 모든 에러는 catch 절로 들어간다
  console.log(3);    // e : error 객체가 다 처리해준다.
  // 에러 발생하면 실행되는 코드   // ➡️ 콘솔에 에러가 빨간색 글씨가 아닌 흰색 끌시로 나온다.
  // let a = 10;        
  // let b = 10;
  // a + b;  
  
  // ? error의 객체는 3가지(name, message, stack)
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
}



// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함


// ? 오류 객체(Error Object)
// - name, message, stack 정보 제공


// ? 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError

// throw new ReferenceError('오류입니다!');  
// try{
//   let value;
//   if(!value){
//     throw new TypeError('타입이 정확하지 않습니다.')
//   }
// }catch(e){
//   console.log(e.name);
// }


// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행



// 버튼을 클릭하면 서버에게 가지고 있는 유저 정보를 조회해서 그 정보를 내 화면에 뿌려주는 로직이 있다고 가정,
// 이 데이터는 객체처럼 보이지만 문자이다.
// Json.stringify에 뭐든지 넣으면 문자로 나온다. (배열 넣어도 문자)
let data = JSON.stringify({
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})

// 넘어온 데이터를 화면에 뿌리기
try{
   
  const user = JSON.parse(data)   // 서버로부터 받은 데이터를 원래의 자료형으로 되돌린다.(문자->객체)
  console.log(user.value);    // user.name하면 이름이, user.value 하면 undefined 나옴.  
  // 자바스크립트 객체의 특징은 없는거에 접근해도 undefined 반환하고 에러는 발생하지 않는다. => 조건처리 해주기
  // 이메일 등등 값이 없다면
  if(!user.value){
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.')
  }
}
catch(e){
  // 해당 에러는 JSON에서 나온 에러야. 의도하지 않은 KEY값에 접근해서 나온 에러야 (더 정확하게 표현하기 위함)
  // ? 에러 다시 던지기
  console.log('JSON ERROR : ' + e.message);

  // 사용자에게 요청 보내기 : 다시 데이터 보낼거야?
  // ? 예외 처리
  // confirm('해당 데이터를 불러오는데 실패했습니다. 다시 시도할까요?');

  // ? 에러 처리
  // 사용자에게 시각적으로 보여주고 싶으면?(html에 띄우기)
  document.body.innerHTML = `404 not found.`
}
// 에러 발생해도 멈추지 않게끔 다른 코드 실행시키는 코드 
finally{
  console.log('에러가 발생해도 해당 코드는 작동한다.');
}