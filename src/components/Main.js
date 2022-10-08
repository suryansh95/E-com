import { addToCart, RemovefromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productlist } from "../redux/ProductAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main componet from saga", data);

  useEffect(() => {
    dispatch(productlist());
  }, [dispatch]);
  return (
    <div className="App">
      <br />
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <div>{item.title}</div>
            <br />
            <img className="product-image" src={item.image} alt="" />
            <div>price:{item.price}$</div>
            <div>catagory: {item.category}</div>
            <div>
              rating:{item.rating.rate}, {item.rating.count} people rated
            </div>
            <button onClick={() => dispatch(addToCart(item))}>
             add to cart
            </button>
            <br />
            <button onClick={() => dispatch(RemovefromCart(item.id))}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Main;