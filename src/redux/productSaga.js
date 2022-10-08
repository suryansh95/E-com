import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {

  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  if (data.query === "" || data.query === null) productSaga();
  else {
    let result = yield fetch(
      ` https://fakestoreapi.com/products/category/${data.query}`
    );
    result = yield result.json();
    console.log(result, "my result is here");
    yield put({ type: SET_PRODUCT_LIST, data: result });
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
