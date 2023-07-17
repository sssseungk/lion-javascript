/* ---------------- */
/* For In Loop      */
/* ---------------- */


// 객체로 정의된 자바스크립트 변수
const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};


// * in문
// => 객체 안에 내가 원하는 값(Property)이 있는지 물어볼 때 사용함 (반환값은 true/false)
// const key ='creator';

// ? toString, cunstructor, valueOf => true값 반환함
// ? 객체는 Object 프로토타입(찐객체)과 연결되어 있어서 조상한테 있는 능력을 양산품들도 갖고 있는거임.
const key ='valueOf';


// 자바 스크립트 객체 안에 creator key가 있니 ? => true 반환
console.log(key in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?



// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// * in문보다 정확하게 내가 그 속성을 가지고 있는지 판단할 수 있다. 
// * hasOwnProperty는 우리가 만든 능력이 아니라 자바스크립트 언어가 부여한 능력(찐객체의 능력)
// 자바스크립트는 자유로운 언어라서 객체에 메서드로 hasOwnProperty를 새로 정의하면 기존 능력을 상실하고
// 내가 새롭게 만든 능력이 적용되어 찐객체 능력은 더이상 적용되지 않는다.
// const javaScript = {
//   creator: 'Brendan Eich',
//   hasOwnProperty(){
//     return '이게 된다고..?'
//   }
// };

// javaScript.hasOwnProperty(key);

// 찐 오브젝트에 접근해서 찐 객체 능력을 강제로 수정함
//객체에서 변경하는 것 뿐만 아니라 오브젝트 프로토타입에 접근해서 값을 수정할 수도 있다. => 미친짓임. 런해라.

Object.prototype.nickname = 'tiger';

// ⬇️ 아래처럼 안전하게 접근함

// * 찐 객체는 찐 객체의 능력 Object.prototype을 통해 접근할 수 있다.
// ! 능력 빌려쓰는 메서드 : call() / 빌려 쓸 애 : hasOwnProperty
// hasOwnProperty에 key를 넣어 조회한다.
Object.prototype.hasOwnProperty.call(javaScript, key);


// 객체 javascript가 가지고 있는 모든 key값을 조회해주세요.
// ? in문을 반복해서 쓰는게 for in 문!
// ? let key 변수 생성하고 그 변수에 javascript가 가진 내용을 출력함
for(let key in javaScript){
  // creator, createAt, stardardName.... 출력됨 + 우리가 임의로 추가한 nickanme도 출력됨 
  // console.log(key);

  // * => 해결 위해 prototype.hasownproperty.call(javascript, key)을 사용함
  // * if(({}).hasOwnProperty.call(javaScript, key))로 줄여쓸 수 있다.
  // * (Object.prototype이 ({})로 대체됨)
  if(Object.prototype.hasOwnProperty.call(javaScript, key)){
    console.log(key);
  }
}




// for ~ in 문 -> 객체의 속성을 순환하는 용도
// - 객체 자신의 속성만 순환하려면?


// - 배열 객체 순환에 사용할 경우? 
const tens = [10, 100, 1000, 10000];

// ! for ~ in은 객체 순환 용도로는 사용 가능하지만 배열은 좀 그럼 .. for in은 객체에 양보하세요 ~
// ! MDN 피셜 : 순서가 중요한 배열에서는 적합하지 않다. 
// ! 배열에서는 ARRAY의 능력인 for~of나 for~each 사용하는 것을 권장한다.
// for ~ in은 배열을 순환하는 용도로는 적합하지 않다. => 의도하지 않은 값을 가져올 수 있음
for(let key in tens){
  // 키값 0, 1, 2, 3이 튀어나온다. 
  console.log(tens[key]);
}

// ? 요약 !!!!
// 객체 순환할 땐 for in 쓴다.
// 객체는 그냥 순환하면 안되고 hasownproperty 사용하는게 훨씬 안전하다.
// 배열 순환 용도로 for of 사용!!