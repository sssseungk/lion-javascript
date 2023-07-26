import { insertLast, tiger } from './lib/index.js';


// 이렇게 값을 불러온다는 것만 알아두자! 
// const data = tiger.get('https://jsonplaceholder.typicode.com.users');

// console.log(data);

// fetch 는 왜 쓰는 건가요?


const URL = 'https://jsonplaceholder.typicode.com/users/1';


// 1. fetch(url) : 기본 get 통신 = 프라미스 객체
// -> then 또는 await (async) 로 결과 받을 수 있다.
// + await 역할은
//   1) 코드실행흐름제어 - resolve, reject 반환할때까지
//   2) result 값 내뱉는 역할

// => 프라미스 객체의 ok! 떨어지면
// response.json() 응답을 파싱해 JSON 객체로 변경! -> data 키에 저장

// response = await S2(URL) //^ 응답
// response.data = await response.json() //^ 응답 -> 파싱
// userData = response.data