// 

// [readystate] => 현재 상태가 어떻게 변경됐는지 알려주는 애

// 0: uninitalized
// 1: loading
// 2: loaded
// 3: inertactive
// 4: complete
// ? 2. 3. 4는 onreadystateChange 이벤트 영역 안에서 확인할 수 있다.


//? onreadystateChange, readyState, status




//! callback

/* callback --------------------------------------------- */

//? 함수의 인자에서 객체 구조 분해 할당하기
/*
export function xhr({
  method='GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin':'*'
  }
} = {}) {   // = {} :: 전달받은 객체가 없을 때 기본값을 일반 객체로 하겠다.

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  // Object.entries : key, value 쌍을 가진 배열을 반환한다. (코어자바스크립트)
  Object.entries(headers).forEach(([key,value])=>{
    // 반복문을 돌면서 key, value를 세팅한다. (xhr에서 제공해줌)
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));

}
*/

// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess:(result){
//     console.log(result);
//   },
//   onFail:(err){
//     console.log(err);
//   },
//   body:{
//     name:'tiger'
//   }
// });


//* 1. 자바스크립트의 함수는 객체이다. (함수 자체에 key, valuue를 설정할 수 있음)
//* 2. 사용자(협업개발자)는 xhr.get 이렇게 써도 비동기 함수가 실행되게 쉽게 쓰고 싶다.    
//* 3. 설계자 => 함수 안에 메서드(객체)를 넣어버리자 !
// 함수가 함수를 메서드로 가질 수 있다. => 객체이기 때문에.


// JS의 함수의 끝은 찐객체
// xhr은 함수이자 객체. get메서드를 내장하고 있다.
// 객체의 메서드로 정의한 것 같은 모습이다.
//? 매개변수 형태 알려줌
// /**
//  * 
//  * @param {string} url : 서버와 통신할 주소를 입력해야돼!
//  * @param {function} onSuccess : 넌 함수야, 서버와 통신 성공시 실행될 콜백함수를 입력해야돼!
//  * @param {function} onFail : 넌 함수야, 서버와의 통신 실패시 실행될 콜백함수
//  * @return server data 
//  */

// xhr.get = (url, onSuccess, onFail)=>{
//   xhr({   // 내가 나를 다시 실행한다.
//     //* shorthand property(단축속성으로 줄여쓸 수 있다.)
//     url, // url:url,
//     onSuccess, // onSuccess:onSuccess,
//     onFail// onFail:onFail
//   })
// }


// xhr.post= (url, body, onSuccess, onFail)=>{
//   xhr({
//     method: 'POST',
//     url,
//     body,
//     onSuccess,
//     onFail
//   })
// }


// //! xhr.put()   
// xhr.put = (url, body, onSuccess, onFail)=>{
//   xhr({
//     method: 'PUT',
//     url,
//     body,
//     onSuccess,
//     onFail
//   })
// }



// //! xhr.delete()
// // body는 필요없다. 
// xhr.delete = (url, onSuccess, onFail)=>{
//   xhr({
//     method: 'DELETE',
//     url,
//     onSuccess,
//     onFail
//   })
// }











// console.dir(xhr);



// // 호출
// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (res)=>{
//     console.log(res);
//   }, 
//   ()=>{}
//   )






// // 유저랜더링(data)





// // 유저랜더링(data)


//* 쌤 코드----------------------------------
/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* callback --------------------------------------------- */

// 객체 구조 분해 할당 

export function xhr({ 
  method = 'GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
  'Content-Type':'application.json',
  'Access-Control-Allow-Origin':'*'
  } 
} = {}) {

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        // 받을 땐 해석기 돌리기
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  // xhr에게 값을 보낼건데 문자화를 시켜서 보낼거야
  xhr.send(JSON.stringify(body));
}


// method, url, onSuccess, onFail, body, headers

// xhr({
//   method:'PUT',
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });


// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자 
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !! 

 
/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수 
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url,onSuccess,onFail)=>{
  xhr({
    url,
    onSuccess,
    onFail
  })
}


xhr.post = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}


xhr.put = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}