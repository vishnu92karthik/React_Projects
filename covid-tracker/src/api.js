import { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends Component {
constructor(props){
  super(props);
this.state= {
  items:[],
  isLoaded: false
}
}
componentDidMount(){
  fetch('https://reqres.in/api/users?page=2')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded:true,
      items:json
    })
  });
}
render(){
   var {isLoaded, items} = this.state
   if(!isLoaded){
     return<div>Is Loadind</div>
   } else {

  return(
    <div className="App">
    {items.data.map(item => (
      <li key= {item.id}>
        {item.first_name} | {item.email}
      </li>
    ))}
    </div>
  );
}
}}

export default App;