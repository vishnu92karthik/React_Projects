import React,{useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Grid from './Grid';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count +3)
  }
  const handleClickSub = () => {
    setCount(count -3)
  }
  return (
    <>
    <div className="App">
      <Card className="text-center">

  <Card.Body>
    <Card.Title>Counter</Card.Title>
    <Card.Text>
    {count}
    </Card.Text>
    <Button variant="primary" onClick={handleClick} >+</Button>
    <Button variant="primary" onClick={handleClickSub}>-</Button>
  </Card.Body>

</Card>

    </div>
    <Grid />
    </>
  );
}

export default App;
