import { getNode, getStorage, setStorage } from "./lib/index.js";


const textField = getNode('#textField');


// storage에 데이터 넣어주기
function handleTextField(){
  const value = this.value;

  setStorage('text',value);
}

// 텍스트 필드에 값 남아있게 해주기 
function init(){
  
  getStorage('text').then((res)=>{
    // console.log(res);
    textField.value = res;
  })

}

textField.addEventListener('input',handleTextField)
window.addEventListener('DOMContentLoaded',init)