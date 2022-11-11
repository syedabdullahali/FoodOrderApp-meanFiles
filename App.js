import './App.css';
import {useState} from 'react';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CardProvider from './store/CardProvider';
function App() {

  const [cartIsShown,setCartIsShown]= useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }

  return (
    <CardProvider className="App">
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
        <Meals/>
     </main>
    </CardProvider>
  );
}

export default App;
