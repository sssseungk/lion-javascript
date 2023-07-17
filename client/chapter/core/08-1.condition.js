/* ---------------- */
/* Condition        */
/* ---------------- */

// if("0"){
//   console.log('이 조건은 항상 실행됩니다.');
// }else{
//   console.log('조건에 부합하지 않습니다.');
// }
// 문자열 "0"이 boolean 형으로의 형 변환이 일어나 true가 됨 ("" 빈 문자열은 false)

// 프롬프트로 값을 받는 방법

// let result = prompt('자바스크립트의 공식 이름은 무엇일까요?', '').toLowerCase();
// console.log(result);  // 소문자로 출력됨
// if(result == 'ecmascript'){
//   console.log('정답입니다!');
// }else{
//   console.log('모르셨나요? 정답은 ECMAScript 입니다!')
// }


// let value = prompt('숫자 하나를 입력하세요 : ', 0);
// if(value > 0){
//   console.log(1);
// } else if(value < 0){
//   console.log(-1);
// } else{
//   console.log(0);
// }

// let result = (a + b < 4) ? '미만': '이상';


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// // 영화 봤니?
// let didWatchMovie = 'yes';

// // 영화 볼거니?
// let goingToWatchMovie = 'no';

// if(didWatchMovie === 'yes'){
//   console.log('무슨 영화 봤어?');
// }else if(goingToWatchMovie == 'yes'){
//   console.log('나랑 영화 보러 갈래?');
// } else{
//   console.log('그래...');
// }

// confirm 메서드 : 확인 누르면 true, 취소 누르면 false 반환
//  let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');
//  let goingToWatchMovie = 'yes';

// if(didWatchMovie){
//   console.log('봤어');
// }else{
//   console.log('안봤어');
// }


let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');
let goingToWatchMovie = 'yes';

if(!didWatchMovie){
  let goingToWatchMovie = confirm('영화 볼거니?');
  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니?', '');

    if(withWho === '여자친구'){
      console.log('zzz');
    } else if(withWho === '가족'){
      console.log('화목하네');
    } else{
      console.log('재밌게 보구와~~~~')
    }
  }

}else{
  let alone = confirm('너 혼자 봤니?');

  // 혼자 봤으면 실행되는 조건식
  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('너..찌질했네..');
    }else{
      console.log('너 T야?');
    }
  }
}



// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식