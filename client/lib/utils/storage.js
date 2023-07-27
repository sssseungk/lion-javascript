import { typeError } from "../error/typeError.js";
import { isString } from "./typeOf.js";



const {localStorage:storage} = globalThis;


// 유틸함수 만들기
export function setStorage(key, value){

  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve()
      storage.setItem(key, JSON.stringify(value));
    }else{
      reject({message:'key는 문자 타입이어야 합니다.'})
    }
  })

}



// get은 promise 형태로 해주는게 좋음 ! 
export function getStorage(key){
  // 프라미스를 리턴해야한다.
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve(JSON.parse(storage.getItem(key)))   // resolve 안에 넣어줘야함!!
    }else{
      reject({message:'key는 문자 타입이어야 합니다.'})
    }
  })
}

export function deleteStorage(key){
  return new Promise((resolve, reject)=>{
    // 키가 없으면 전부 지우고 키가 있으면 해당 항목만 지우기
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}