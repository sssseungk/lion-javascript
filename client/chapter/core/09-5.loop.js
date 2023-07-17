/* --------------- */
/* For Of Loop     */
/* --------------- */
/*
? iterable : '반복이 가능한 애들' ex) String, Array, Array-like(유사배열, 배열처럼 생겼지만 배열이 아닌 애들)
?   => 얘네는 symbol.iterator 기능을 내장하고 있음.
? 배열의 특징 : 인덱스 [], length가 존재한다. 
* 인덱스와 length를 가지는데 배열이 아닌 경우 => 유사배열(사실 객체임) => [Prototype] : NodeList로 출력됨
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3
}

! 객체는 iterable 하지 않아서 for of를 사용할 수 없다.
? iterable인지 아닌지 확인하는 방법 => 
? 객체에 iterable 요소를 부여하려면 Symbol.iterator를 추가해주면 된다.
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3
  // [Symbol.iterator]{...}
  ? Symbol.iterator을 추가함으로써 iterable로 바꿔줘서 for of를 쓸 수 있다.
}
*/


// * languages : 배열!! => 배열 안에 객체가 아이템으로 들어가 있는 형태 [ {}, {}, {} ]
const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


for(let value of languages){
  // console.log(value);
  // ? console.table(value); => 테이블 형태로 출력해준다!! 
  // console.table(value);

  // value 값에 접근! => JavaScript, Java, C#을 반환한다.
  // console.table(value.name); 

  // * 얘도 반복문이라 continue, break등 사용할 수 있다!
  const name = value.name;
  // if(name === 'Java') continue;
  // console.log(name);
  // Java 제외한 Javascript와 C#만 반환된다.

  // 논리연산자 && 이용해 두 조건 모두 만족할 경우 실행되도록 한다.
  // JavaScript부터 break 걸려서 아무것도 실행되지 않는다. => 길이 조건 추가해주기
  if(name.includes('Java') && name.length < 5) break;
  console.log(name);
}


// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기




const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// * 객체의 키, 값 순환 방법
// ? 1. for ~ in 문으로 순환하는 방법

for(let key in randomUser){
  // 값 조회할 수 있는데 이렇게 되면 조상까지도 다 찾게돼서 안됨
  //console.log(randomUser[key]);
  if (({}).hasOwnProperty.call(randomUser, key)) {
    // L1 : 첫 번째 value 값
    let L1 = randomUser[key];
    console.log('L1 : ', L1);
    // 중간값이 객체인 애들 비교
    if(typeof L1 === 'object'){
      for(let key in L1){
        if (({}).hasOwnProperty.call(L1, key)) {
          let L2 = L1[key];
          console.log('\tL2 : ',L2);
          if(typeof L2 === 'object'){

            for(let key in L2){
              if (({}).hasOwnProperty.call(L2, key)) {
                let L3 = L2[key];
                console.log('\tL3 : ',L3);
              }
            }
          }
        }
      }
    }
  }
}



// for(let key in randomUser){
// }

// * Object.values(randomUser) => 모든 키 값을 배열로 반환한다.
for(let value of Object.values(randomUser)){
  console.log(value);
}



// Object.keys()
// Object.values()
// * Object.entries() : 객체 자체의 열거가능한 속성을 만들고 key, value를 가진 쌍의 배열을 반환한다.
// key, value가 하나의 쌍이 됨 (ex. 0: ['gender', 'female'])

// ? for of로도 객체를 순환할 수 있다 ,,
for(let keyValue of Object.entries(randomUser)){
  let key = keyValue[0];
  let value = keyValue[1];
  console.log('L1 : ', value);

  if(typeof value === 'object'){
    for(let keyValue of Object.entries(value)){
      let key = keyValue[0];
      let value = keyValue[1];
      console.log('\tL2 : ', value);

      if(typeof value === 'object'){
        for(let keyValue of Object.entries(value)){
          let key = keyValue[0];
          let value = keyValue[1];

          console.log('\t\tL3 : ', value);
        }
      }
    }
  // console.log(value);
  } 
}







// - for ~ of 문





// - 성능 비교 진단