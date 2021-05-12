import React,{ Component } from 'react';
import Square from './components/Square.js';

class Board extends Component {
    render () {
      return (
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      )
    }
  }

  export default Board;