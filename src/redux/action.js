import { Add_To_Cart, Empty_Cart, Remove__from_Cart } from "./constant"

export const addToCart = (data) => {
console.log("action addToCart called" ,data)
  return {
      type : Add_To_Cart,
   data
  }
}


export const RemovefromCart = (data) => {
  console.log("action RemovefromCart called" ,data)
    return {
        type : Remove__from_Cart,
     data
    }
  }

  
  export const emptyCart = (data) => {
console.log("action emptyCart called" ,data)
  return {
      type : Empty_Cart,
   data
  }
}
