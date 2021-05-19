 import React, {useState, useEffect} from 'react'
 import DisplayQuestion from './components/DisplayQuestion'
import './App.css';

const App = (props) => {
  const [question, setQuestion] = useState([])

  const getData = async () => {
   await fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        //console.log('data :>> ', data);
        setQuestion((prev) => { 
          return data;
        });
        // setQuestion(data)
      })
      .catch((err)=>{
        console.log(err)

      })
  }

useEffect(() => {
   getData()
}, [])



// console.log('Question here :>> ', question);
  return (
    <div className="App">
      <h1>JEOPARDY</h1>
      <DisplayQuestion question={question} getData={getData} />
    </div>
  )
}

export default App
