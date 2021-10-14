
import { useState,useEffect } from "react";
import './App.css';
import Quiz from "./Quiz";

function App() {
  const [quiz , setquiz] = useState();
  const [question , setQuestions] = useState();
  useEffect(() => {
    async function getQuiz(){
      const url = "https://opentdb.com/api.php?amount=50&category=9&type=multiple";
      const response = await fetch(url);
      const data = await response.json()
      setquiz(data)
      
    }
    return () => {
      getQuiz()
    }
  }, [])
  return (
    <div className="App">
      {data && 
      data.map(qest =>{
        {quest.question}
        {quest.correct_answer}
      })}
    <Quiz  />
    </div>
  );
}

export default App;
