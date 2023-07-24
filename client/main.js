// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)


// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩



import {  jujeobData  } from './data/data.js'
import { 
  getNode, 
  getRandom, 
  insertLast,
  clearContents,
  isNumericString,
  removeClass,
  addClass,
  showAlert,
  shake,
  toggleClass,
  copy,
} from './lib/index.js'


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');


//* [phase-1]
//* [phase-2]
//* [phase-3]


function handleSubmit(e){
  e.preventDefault();       // 버튼 기본 기능 새로고침 막기

  //* 1-2. nameField에 있는 값을 가져와 주세요.
  let name = nameField.value;

  //* 1-3. jujeob 데이터 가져오기
  const list = jujeobData(name)

  //* 1-4. jujeobData에서 랜덤한 주접 한 개를 가져오기
  const pick = list[getRandom(list.length)];     // 마지막 항목 나오도록 -1 안함 

  //* 2-1. 아무 값도 입력 받지 못했을 때 예외처리
  //* 2-2. 공백 문자를 받았을 때 예외처리 replace => regEXP
  //* 3-1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
  if(!name || name.replace(/\s*/g,'') === ''){

    //* 3-2. 재사용 가능한 함수 showAlert()
    showAlert('.alert-error', '이름을 입력해 주세요!!', 2000);

    //* 3-3. gsap shake 기능 구현

    // gsap : 애니메이션 라이브러리 (form :: target (선택자))
    /* global gsap */
    // gsap.to('form', {
    //   duration: 0.1,     // 1초동안 움직이기
    //   x: -10,            // x 방향으로 100px 움직이기
    //   repeat: 5,
    //   yoyo: true,         // 갔다가 다시 돌아오기(왔다갔다)
    //   clearProp: 'x',    // x좌표 초기화
    // })
    
    //* 3-4. animation 모듈화
    shake.restart();

    return;
  }

  //* 2-3. 숫자형 문자를 받았을 때 (E.G   123, 기안84)
  if(!isNumericString(name)){          // Nan인지 체크하기 위해 숫자로 형변환

    //* 3-2. 재사용 가능한 함수 showAlert()
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요!!', 2000);
    
    //* 3-4. animation 모듈화
    // gasp에서 제공해주는 애니메이션 메서드 :: gsap.stop(), gsap.play(), gsap.restart()
    // 계속 다시 실행시킬거면 restart, 한 번만 실행시키고 끝낼거면 play. play는 다시 실행되지 않고 아예 끝남
    shake.restart();       // 다시 실행시키기
    
    return;
  }


  //* 1-6. result의 기존값을 제거해주세요.
  clearContents(resultArea);
  // resultArea.textContent = '';

  //* 1-5. pick 항목을 result에 렌더링 해주세요.
  insertLast(resultArea, pick);
}


//? 과제 : 이름을 제대로 입력하면 클립보드 복사되도록
// let state = false;
// state = true;
// if(state){...logic}


function handleCopy(){
  const text = resultArea.textContent;
  // 클립보드에 복사 되면 alert 창 띄우기 (then)

  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사 완료!');
  })

  // navigator.clipboard.writeText(text).then(()=>{
  //   showAlert('.alert-success','클립보드 복사 완료!');
  // })

}



//* 1-1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
submit.addEventListener('click', handleSubmit)

//*  4-1. result 클릭 이벤트 바인딩
resultArea.addEventListener('click', handleCopy)



