import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

export const productlist = () => {
  //   let data = await fetch (" https://jsonplaceholder.typicode.com/todos/1");
  //   data = await data.json()
  // console.log("productlist action addToCart called" ,data)
  return {
    type: PRODUCT_LIST,
  };
};

export const ProductSearch = (query) => {
  if(query=== "" || null)
  return {
    type: PRODUCT_LIST,
  };
  else
  return {
    type: SEARCH_PRODUCT,
    query,
    
  };
  
};

// export const setproductlist = (data) => {
//   //   let data = await fetch (" https://jsonplaceholder.typicode.com/todos/1");
//   //   data = await data.json()
//   // console.log("productlist action addToCart called" ,data)
//     console.log ("set action");
//   return {
//         type : SET_PRODUCT_LIST,
//         data
//     }
//   }
