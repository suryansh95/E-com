
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import { emptyCart,RemovefromCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';


function App() {
const cartData = useSelector((state)=>state.cartData);
let amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=> prev+next);
let discount = amount/10;
let discountPice = amount-discount;
let tex = discountPice*0.05;
let total = discountPice+tex;

const dispatch = useDispatch();
useSelector ((state)=> state.productData);

return (
  <div>
  <Link to= "/">
Back to Product list
</Link>
    <h1>Cart page</h1>
    <div className="cart-page-container">
      <table>
        <tr>
          <td>Name</td>
          <br/>
          <td>Category</td>
          <br/>
          <td>Price</td>
          </tr>
        {
          cartData.map((item)=>  <tr key={item.id}>
          <td>{item.title}</td>
          <br/>
          <td>{item.category}</td>
          <br/>
          <td>{item.price}</td>
         <button onClick={() => dispatch(RemovefromCart(item.id))}> Remove from cart </button>
         
        </tr>)
        }
      </table>

      <table>
        
      </table>
      <div className="price-details">
      <div><span>Amount:</span><span>{amount}$</span></div>
      <div><span>Discount(10%):</span><span>{discount}$</span></div>
      <div><span>Tax(5%)</span><span>{tex}$</span></div>
      <div><span>Total :</span><span>{total}$</span></div>
      <button onClick={() => dispatch(emptyCart())}> Empty cart </button>   
   
      </div>

    </div>
 <StripeCheckout
name = "pay to E-com"
currency='USD'
amount={total*100}
stripeKey="pk_test_51LOKPLSCPnmXNNOV0vVZJESUarOazJI7omgLtVKb8DieGb7JA3VdVE0zZniLeRHndI7pLTCAXdcMhsVaZdv9yaVn00sHF5pNY3"
 />
  </div>
);
}

export default App;