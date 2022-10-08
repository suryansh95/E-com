import { Add_To_Cart, Empty_Cart, Remove__from_Cart } from "./constant"

export const cartData = (data = [], action) => {
 
switch (action.type){

  case Add_To_Cart : 
  console.log("Add to cart condition called ", action)
  return [action.data, ...data];

  case Remove__from_Cart : 
  console.log(" remove cart condition called ", action)

  const remainingitem = data.filter((item)=>item.id!==action.data);
console.log("remaining item",remainingitem)
    return [...remainingitem];

  case Empty_Cart:
  console.log(" Empty cart condition called ", action)
  data.length = 0
  return [...data];


  default:
    return data
}
}