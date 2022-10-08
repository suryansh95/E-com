import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductSearch } from "../redux/ProductAction";


const Header = () => {


  const result = useSelector ((state)=> state.cartData);
  const dispatch = useDispatch();
  return (
  <div className="header">
<Link to= "/">
<h1 className="logo">E-com</h1>
</Link>

<div className="search-box">
<input type="text" onChange={(event)=>{
   dispatch(ProductSearch(event.target.value));
 
}} placeholder="Search product" />
</div>

<Link to = "/Cart">
<div className="cart-div">
<span>{result.length}</span>
<img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
</div>
</Link>
  </div>
  )
}
export default Header;
