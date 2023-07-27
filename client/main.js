// 통신할 주소 : 'https://jsonplaceholder.typicode.com/users'
/* global gsap */

const URL = 'https://jsonplaceholder.typicode.com/users'

import { 
  getNode as $,     
  attr,     
  changeColor,     
  clearContents,     
  delayP,     
  getNode,     // getNode rename 하기
  insertLast, 
  renderEmptyCard, 
  renderSpinner, 
  renderUserCard, 
  tiger 
} from './lib/index.js';


//* 1. tiger 함수를 사용해서 user 데이터를 가져와주세요.

// const response = tiger.get('https://jsonplaceholder.typicode.com/users')    // promise 객체
// console.log(response);    // promise 객체

// Promise 객체 안의 PromiseResult에 접근하기(await)
const response = await tiger.get('http://localhost:3000/users')    // promise 객체
// console.log(response);     // response 객체

// response 객체 안의 data key 값에 접근하기(data key 값에 서버에서 넘어온 데이터가 존재함)
const userData = response.data;   // Response 객체의 data값에 접근해 원하는 값 얻기
// console.log(userData);   // 원하는 데이터 수집

const userCardInner = $('.user-card-inner')

//* 2. 함수 안으로 넣기(리렌더링 하기 위해서)
// await을 함수 안에 넣으려면 함수가 async이어야 함!
async function renderUserList(){

  renderSpinner(userCardInner)   // 스피너 랜더링  

  try{
    await delayP()    // 2초동안 스피너 돌아가면서 로딩되다가 카드 나타남

    // $('.loadingSpinner').remove();    // 로딩되면 스피너 사라지게 하기

    gsap.to('.loadingSpinner', {
      opacity: 0,
      // 애니메이션 끝나면 스피너가 진짜 사라지게 하기
      onComplete(){   
        $('.loadingSpinner').remove();
      }
    })

    // Promise 객체 안의 PromiseResult에 접근하기(await)
    const response = await tiger.get('http://localhost:3000/users')    // promise 객체
    // console.log(response);     // response 객체
    // const response = await tiger.get('https://jsonplaceholder.typicode.com/users')    // promise 객체
    const userData = response.data;

    //* 3. 유저 데이터 랜더링하기(userList.js에 함수로 만듦)
    // 어디에 랜더링 할건데? 어떤 데이터를 랜더링 할건데?
    userData.forEach((item)=> renderUserCard(userCardInner,item))

    // getNode를 전달하지 않고 string 전달해도 gsap이 알아서 해줌
    changeColor('.user-card')

    // user-card에 카드 나타나게 하는 애니메이션 주기 
    gsap.to('.user-card', {
      x:0,         // -100만큼 밀어놓은 x를 원래 위치로 돌려놓기
      opacity:1,   // 투명도 밝게
      stagger: 0.2  // 카드들이 순차적으로 랜더링됨
    })   
  }

  catch(err){
    renderEmptyCard(userCardInner)
    console.log(err);
    // 실패하면 페이지 넘어가게 하기
    // location.href = '404.html'
  }
}

renderUserList()

function handleDelete(e){
  const button = e.target.closest('button');    // 클릭했을 때 가장 근접한 대상(버튼) 찾기
  const article =  e.target.closest('article');   // 버튼 누르면 article이 나온다. 

  // 다른 영역 클릭하면 아무것도 안뜨고 버튼 클릭하면 버튼만 뜨게 한다.
  if(!article || !button) return;   // 버튼이 없으면 함수 실행하지마!

  // console.log(article);   // 삭제 버튼 누르면 article 태그가 옴

  // slice를 사용해서 앞에 user-1 텍스트는 버리고 숫자만 뽑는다.
  const id = attr(article, 'data-index').slice(5);   // data-index 수집 방법 1 :: attr
  // console.log(id)
	// console.log(article.dataset.index);         // data-index 수집 방법 1 :: dataset => user-1, user-2..

  // delete 통신(브라우저가 서버에 제거해달라고 요청)
  // 이 서버의 user 목록 중에 n번째 아이디를 제거해줘
  tiger.delete(`http://localhost:3000/users/${id}`)
  .then(()=>{
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  })

}


userCardInner.addEventListener('click', handleDelete);