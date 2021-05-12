import React, { useState} from 'react'

function Change() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState('First state');
    let [word, setWord] = useState('Change wo')
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    );
  }
  
  export default Change