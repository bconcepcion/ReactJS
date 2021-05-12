import React,{ Component } from 'react'
class Player extends Component {
    render () {
      return (
        <div className={this.props.whichPlayer}>
          <h2>Player {this.props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }
  
  export default Player