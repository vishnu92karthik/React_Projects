import React from 'react';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
function App() {
  let hello =  <h1>Hello world vishnu</h1>;
  let hello2 = React.createElement('h1',null, 'Hello' );
  return (
   
    <div className="App">
    {hello2}
    <Button  title="Click "/>
    <Button2 />
    </div>
  );
}

export default App;
