/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// ! length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength);  // 13

// ! 특정 인덱스의 글자 추출 (띄어쓰기 포함)
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter);   // r


// * 문자열 중간 글자를 바꾸는 건 불가능 => replace 써야함
// * (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// ! 부분 문자열 추출하기
// 8번부터 추출하기
// ? slice(시작 인덱스, 끝나는 인덱스)
// ? -1 : 8번부터 맨 뒤까지 (8이상 맨뒤미만)
// let slice = message.slice(1, 3);
let slice = message.slice(8, -1);
console.log('slice : ', slice);    // more

let subString = message.substring(1, 3);
console.log('slice : ', subString);    // es

let subStr = message.substr(1, 3);
console.log('subStr : ', subStr);    // ess


// ! 문자열 포함 여부 확인 => 포함하면 포함된 인덱스를 반환, 없으면 -1
// 문자열에 p 있니
let indexOf = message.indexOf('p');
console.log('indefOf : ', indexOf);   // 반환값 -1 :: 없다는 뜻.
let indexOf1 = message.indexOf('L');
console.log('indefOf : ', indexOf1);  // 반환값 0 :: 0번째 인덱스에 있어!

// * 조건처리 -> if(message.indexOf('p') > 0){}

// ! 동일한 값이 있으면 뒤쪽부터 탐색해서 뒤 글자의 인덱스가 반환된다.
let lastIndexOf = message.lastIndexOf('i');
console.log('lastIndexOf : ',lastIndexOf);    // 5
let lastIndexOf1 = message.lastIndexOf('s');  
console.log('lastIndexOf1 : ',lastIndexOf1);  // 6

// ! 포함 여부 확인 => true/false 반환
let includes = message.includes('less');
console.log('includes : ', includes);   // false

// ! less 문자로 시작해? => true/false 반환
let startsWith = message.startsWith('Less');
console.log('startsWith : ', startsWith);   // true

// ! more로 끝나니? => false(.이 없어서)
// endsWith('.') => true
let endsWith = message.endsWith('more');
console.log('endsWith : ', endsWith);    // false


// ! 공백 잘라내기 
let str = '     h  el lo      '
// 문자의 왼쪽 공백 없애기
let trimLeft = message.trimLeft();
// 문자의 오른쪽 공백 없애기
let trimRight = message.trimRight();

// 문자의 양쪽 공백 없애기
// * 양쪽 공백만 제거하고 문자열 안의 공백은 제거해주지 않는다.
let trim = message.trim(str);
console.log('trim : ', str);    // h  el lo

// ! 문자열 안의 공백 제거하기 :: replace(/\s*/g,'');
function normalText(string){
  return string.replace(/\s*/g,'')
}
console.log('normalText : ', normalText(message));   // hello




// ! 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);   // Less is more.Less is more.Less is more.

// ! 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);    // less is more.

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);   // LESS IS MORE.


// ! 텍스트 이름 변환 유틸리티 함수
// 카멜 케이스로 변환
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}
console.log('toCamelCase : ', toCamelCase(message));


// 카멜 케이스로 작성한 애들 앞글자만 대문자로 바꿔주기
function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
console.log('toPascalCase : ', toPascalCase(message));
