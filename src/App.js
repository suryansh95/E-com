
import './App.css';

// import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

import {Routes,Route} from 'react-router-dom';


function App() {

  return (
  <div className="App">
  <Header/>
<Routes>
  <Route path='/' element= {  <Main/>} />
  <Route path='/Cart' element= {  <Cart/>} />

</Routes>

  

 

   </div>
  );
}

export default App;
