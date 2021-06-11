import React from 'react';
import './App.css';
import style from './style';
import './style.css';

//import Button from './Button';
//import Button2 from './Button2';
function App() {
  let hello =  <h1 style= {{...style,...style.headingh1}}>Hello world vishnu</h1>;
  let hello2 = React.createElement('h1',null, 'Hello' );
  return (
   
    <div className="App">
    {hello2}
    {hello}
    </div>
  );
}

export default App;
