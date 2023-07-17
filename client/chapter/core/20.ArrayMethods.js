/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// typeof null => Object
// typeof는 정확하게 내가 넣은 값이 뭔지 확인할 수 없음 -> 신뢰가 낮음
// ? => 정확하게 해결하는 방법 :: Array.isArray
// -> 배열이 아닌 나머지는 전부 false를 반환한다.
// Array.isArray :: 진짜 배열이 맞아?

// * Array.isArray
// ? typeof보다 정확하게 체크할 수 있다. 
// 함수로 작성하기
function isArray(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}

// 화살표 함수로 작성하기 
const isArray1 = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
}

const isNull = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';


// ----------------------------------------------
// * 요소 순환 ---------------------------- */

// ! forEach는 값을 반환하지 않는다.
// ! 장점 : 뒤에 index를 받을 수 있다. (몇번째 아이템인지 수집할 수 있음)
// !      : 아이템 개수가 많을 때 편리하다.  
// ! 아이템 개수만큼 반복문을 돈다
arr.forEach((item, index)=>{
  console.log(item, index);
})

const arr = [10,100,1000,10000];


people.forEach((item)=>{
  // console.log(item);    // 아이템이 개별적인 객체로 나오게 된다.
  // 객체의 . 연산자로 접근 가능
  console.log(item.name);
})

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

// 이벤트 처리 할 때 이 방식이 제일 좋은가요 ? no -> 함수가 너무 많이 들어가서 부하가 생김
// 이벤트 위임 event delegation
const span = document.querySelectorAll('span');

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    console.log(this,index);
  })

})


// * 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// ? reverse
// const arr1 = [10,100,1000,10000];

arr1.reverse();
console.log(arr1);   // 원본 훼손된거임

const arr1 = [10,100,1000,10000];

// ? splice
arr1.splice(1, 2, 'js', 'css');
console.log(arr1);

// ? sort : 배열 안의 값이 순서대로 정렬되는 것 같지만 정렬이 안된다
// => 유니코드 식으로 정렬하기 때문에 1 다음 0 개수 비교..
// sort는 원하는 대로 정렬이 이루어지지 않음. 정교하게 비교하는 법 :: compare function 사용
const arr2 = [10,100,1000,10000];
arr2.splice(1, 0, 5, 13);
console.log(arr2);
arr2.sort();
console.log(arr2);

// ? compare function => sort를 할 땐 compare function을 해줘야 보다 정확하게 정렬할 수 있다.
// ? compare function 코드 로직 ⬇️
// 반환값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환값 > 0 : b가 a보다 앞에 있어야 한다.
const arr3 = [10,100,1000,10000];
arr3.splice(1, 0, 5, 13);
console.log(arr3);
arr3.sort((a, b)=>{
  return a - b;
})

console.log(arr3);


// * 새로운 배열 반환 ------------------------ */
// ? concat :: 배열을 합친다.
// const array = [1, 2, 3];
const user = ['선범', '효윤', '준석'];
array.concat(user);

// ? concat 보다 좋은 애 :: 모든걸 다 가지고 잇는 배열이 새롭게 탄생함
const newArray = [...array, ...user, 'js', 'css'];
console.log(newArray);

// ? slice
const slice = array.slice(2, 5);
console.log(slice);

// ? toSorted :: 정렬해서 새로운 배열을 만들어준다.  
const toSorted = array.toSorted((a, b)=>{
  return b - a;
})


// ? toReversed
const toReversed = array.toReversed();
console.log(toReversed);


// ? toSpliced : 두 번째 인덱스부터 아무것도 제거하지 않고 새로운걸 추가한다.
const array = [1, 5, 2, 4, 3];
const toSpliced = array.toSpliced(2, 0, 'js', 'css', 'react');
console.log(toSpliced);


// ! map : 반환되는 값이 있어야하는데, 반환된 값이 배열로 들어가게 된다.
// 원하는 항목만 다시 배열로 내보낼 때 사용한다.
// const job = people.map((item, index)=>{
//   // console.log(item, index);    // 각각 객체들이 튀어나옴(forEach와 유사)
//   return item.profession   
// })
// document.body.insertAdjacentHTML('beforeend', job);
// console.log(job);

const job = people.map((item, index)=>{
  // item의 profession을 생성하서 그걸 담고 있는 div를 생성해서 문서에 뿌리기
  return `<div> ${item.profession}/div>`
})

// job을 그대로 렌더링하면 ,까지 같이 나오게 됨
// 배열 자체 item에 접근하기 위해 배열의 메서드 forEach를 다시 사용해서
// 배열의 아이템을 하나씩 뽑아내고, 그 아이템을 document.body에 뿌린다.
job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend', job);
})
console.log(job);


// * map으로 실습했는데 뭔지 모르겠음..(2교시 30분언저리)
// const job = people.map((item,index)=>{
//   return /* html */`
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `
// })

// job.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })

// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

// ?. map 예시 2
// people 자료구조에서 나이만 모아놓은 배열이 필요해!
// => 가공처리 하고싶어 :: 나이 -1을 해서 내보내고 싶어.
// 선별한 아이템들을 담는 배열을 새로 정의한다. 
const newAge = people.map((item)=>{
  console.log(item.age - 1);
})



// * 요소 포함 여부 확인 ---------------------- */

// ? indexOf : 너 이거 배열에 포함하고 있어? 몇 번째에 있어?
arr.indexOf(10);   


// ? 41분))) lastIndexOf : 뒤에서부터 값을 찾고, 대상을 찾으면 첫번 째 순서라는 것을 알려주기 위해 반환하는 것..?
console.log(arr.lastIndexOf(10));


// ? includes : 너 ??값 들어있어?
console.log(arr.includes(1000));



// * 요소 찾기 ------------------------------ */

// ? find : 배열 안에 내가 원하는 아이템이 있는지 찾아준다.
// 특정 대상이 있는지 여부 확인, 있다면 해당하는 아이템을 반환한다.
// 배열을 반환하는 것이 아님!!
const finc = people.find((item)=>{
  return item.id > 1
  // 아이템의 아이디 값이 1보다 큰 애가 있다면 그것을 내보내줘
})
console.log(find);

// ? findIndex : 반환값이 아이템이 아닌, n번째9인덱스를 반환한다)
const findIndex = people.findIndex((item)=>{
  return item.id === 3
})
console.log(findIndex);   // 3 (3번째에 위치해있는 아이템이다.)



// * 요소 걸러내기 --------------------------- */

// ? filter : 배열을 반환한다.
// 아이템의 아이디가 2보다 큰 애를 반환해줘
const filter = people.filter((item)=>{
  return item.id > 2
})



// * 요소별 리듀서(reducer) 실행 -------------- */
// 영상 3 5분.

// ? reduce

const totalAge = people.reduce((acc, cur)=>{
  return acc + cur.age;        // [Object Object]3042..
})
console.log(totalAge);
// 초기값 입력하지 않으면 reduce는 초기값을 people 한 번 까뒤집었을 때 아이템의 첫번째를 acc로 할당한다.
// 까뒤집으면 그 안에 들어있던 각각의 객체가 나타나게 되는데, 초기값이 없으면
// 객체의 항목을 acc에 넣게 된다. => acc에는 객체가 들어가게 됨,
// 객체 + 40. => 객체는 내보낼때 '[Object Object]'가 된다'
// 문자에 숫자를 접합해 [object Object]40이 된다. 이 값이 acc로 올라가고,
// 다시 cur.age를 더해 [object Object]40305218이 반환된다. 
// 맨 처음 실행했을 때 acc값(cur)이 초기값으로 들어가게 된다.
// 따라서 acc + cur.age = Obect + object인 객체가 된다.
// 초기값을 객체가 아닌 숫자로 지정해주기 위해 0을 써주는게 좋다.
// 숫자로 정확히 계산하려면 초기값을 0으로 지정해줘야한다.


// ? reduce로 태그 만들기
const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');
document.body.insertAdjacentHTML('beforeend',template);


// ? reduceRight


// * string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아'

// ? split : 문자를 가져다가 배열로 만들어준다.
// 띄어쓰기로 구분
const stringToArray = str.split(' ')
console.log(stringToArray);


// ? join : 배열을 가져다가 문자로 만들어준다.
const arrayToString = stringToArray.join('/');
console.log(arrayToString);