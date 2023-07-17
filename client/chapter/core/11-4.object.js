/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  date: '2023. 7. 11',
  tableIndex: 5,
  // 배열 안에 객체가 들어있는 형태 (통새우 돈까스에 접근하기 => shopOrder.menu[0].name)
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
  ],

  // 컨사이스 메소드
  totalPrice(){

    // ! totalPrice 메소드 생성 방법 1. 화살표 함수로 만들기
    // let total = 0;
    /* 화살표 함수 버전
    this.menu.forEach((item)=>{
      this.total += item.price * item.count;
    })
    */
    // ! totalPrice 메소드 생성 방법 1-2. 일반 함수로 
    // this.menu.forEach(function(item){
    //   total += item.price * item.count;
    // })

    // return total;
    // ! totalPrice 메소드 생성 방법 2. reduce() 사용하기
    const result = this.menu.reduce((acc, item)=>{
      return acc + (item.price * item.count)
    }, 0)

    // ! totalPrice 메소드 생성 방법 2. reduce() 사용 + 화살표 함수로 줄여 쓰기
    // return this.menu.reduce((acc, item)=> acc + (item.price * item.count), 0)
  }
  /* 
    ? 일반 함수
    totalPrice: function(){
    console.log(this);
  } 
    ? 화살표 함수
    totalPrice: ()=> {
    console.log(this);
  }*/
};

// 가격 더하기
shopOrder.menu[0].price + shopOrder.menu[1].price
// 주문 개수까지 반영해서 가격 더하기
shopOrder.menu[0].price * shopOrder.menu[0].count + shopOrder.menu[1].price * shopOrder.menu[1].count


// 반복문으로 생성되는 객체들의 총합까지 모두 구하기
let total = 0;

shopOrder.menu.forEach((item)=>{
  //console.log(item.price);
  total += (item.price * item.count);
})

console.log(total);



// 메서드와 this 
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.


// 메서드 단축 구문


// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  // 순회하면서 객체 item 2개 가져온다.
  getItem(index) {
    return this.items[index];    // this -> navigationmenu (컨사이스 메소드=일반함수)
  },

  // ? 화살표 함수 사용하면 에러 발생
  // ? this는 상위 컨텍스트 window => window.items.push는 말이 안됨
  /*
  addItem: (newItem) => {
    this.items.push(newItem);    
  }, */

  // ? 컨사이스 메소드(일반함수)로 바꿔서 this가 navigationMenu를 가리키게 하기
  addItem (newItem){
    console.log(this);
  }
};

navigationMenu.addItem()
// navigationMenu의 아이템을 조회하는 메소드
// navigationMenu.addItem({
//   id: 'link-l',
//   text: 'Lycos', 
//   link: 'https://lycos.co.kr'
// })