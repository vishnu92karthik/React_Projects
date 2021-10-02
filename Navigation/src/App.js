
import './App.css';
//import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,Route
} from "react-router-dom";
import Hero from './Hero';
import Navbar1 from './Navbar1';
import Addtocart from './Addtocart';
import Homecart from './Homecart';
import {CartProvider} from 'react-use-cart';
import Addtowishlist from './Addtowishlist';
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Hero />
      <CartProvider>
      <BrowserRouter>
      <Switch>
                <Route path="/" exact component= {Homecart} />
              
                <Route path="/add-to-cart" exact component= {Addtocart} />

                <Route path="/my-wishlist" exact component= {Addtowishlist} />
            </Switch>
            </BrowserRouter>
          
            </CartProvider>
    </div>
  );
}

export default App; 
 