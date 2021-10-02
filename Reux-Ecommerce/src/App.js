import React,{Component} from 'react';
import Products from './components/Products';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {products:[]};
  }
 
  render() {
  return (
    <div className="container">
     <h1>Ecommerce app</h1>
     <hr />
     <div className ="row">
       <div className = "col-md-10">
      
      <Products  handleAddToCart= {this.handleAddToCart} />
       </div>
       <div className = "col-md-4"></div>
     </div>
    </div>
  );
}
}
export default App;
