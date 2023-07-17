/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// ? rest parameter : ...args, ...rest, ...children
// 매개변수로 인지하면 rest parameter로 인식함
// argument의 모든 애들을 받아서 배열로 만들어준다. (arguments와 유사함)

let calcAllMoney = (a, b, ...args)=>{

  // console.log(args)
  // let total = 0;
  // args.forEach((item)=>{
  //   total += item;
  // })

  // return total;

  // return args.reduce(function(acc, item){
  //   return acc + item;
  // }, 0)

  // ⬆️  화살표 함수로 쓰기
  // reduce의 콜백 함수에서 acc + item 값을 내뱉는다.
  return args.reduce((acc, item)=>acc + item, 0)

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);



// * 화살표 함수와 this


// * 함수 만드는 방법 3가지 => this를 찾느 ㄴ방법이 다 다르다.
// ? 1. 함수 선언문
function normalFunction(){
  console.log(this);
}

window.normalFunction()   // 일반 함수 -> 윈도우가 호출 시켜줌 => this : window

// ? 2. 함수 표현식
const expressionFunction = function(){
  console.log(this);
}
// 얘도 일반 함수 -> 윈도우가 호출해서 this는 window 가 담긴다.

// ? 3. 화살표 함수식 -> 함수로서의 일만 해서 가볍다.
const arrowFunction = ()=>{
  console.log(this);
  // window가 나오지만 window에 의해 호출된게 아니라 나 자신이 호출 된것.
  // 여기서의 this는 다 this 없는데? 바인딩 안했는데? 내 부모꺼 누구야
  // 부모는 window => 그래서 window를 가져오는 것.
}

// 객체 안에서 this
const user = {
  totla: 0,
  name: 'tiger',
  age:32,
  address: '서울시 중랑구 면목동',
  grades: [80,90,100],
  totalGrades: function(){      // => 객체 안에 있는 함수 : 메서드 
    
    console.log(this.total);   // => this가 누군지 알기 때문에 가능함
  
    // user의 grades(배열)를 가져와서 forEach문을 돌린다. 
    // 각 값을 뽑아서 this.total(user.total)에 값을 넣는다.
    this.grades.forEach(function(item){
      // * 이 함수는 forEach문 안에 들어있기 때문에 this를 가져올 수 없다.
      // 이 콜백함수는 forEach에 의해 호출된 것이다. => 화살표 함수로 바꿔주면 해결된다.
      // console.log(this);    // 일반 함수일때는 this를 window를 수집해와서 undefined.
                               // 화살표 함수이면 상위 컨텍스트 totalGrades에서 this(user)를 찾는다.
                               // => 결과 : user가 순환됨
      
      // this.total += item;
    })

    // console.log(this.total);    
  }

  //totalGrades: ()=>{
  //  console.log(this.grades);   // this는 window, window에는 grades가 없기 때문에 에러 발생한다.
  //}
}

// ! 객체의 메서드를 정의할 때는 일반 함수가 더 좋다.
// ! 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋다.


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 