import React from 'react'

class Score extends React.Component {

    state = {
        score:0
    }

        

    increment = (evt) => {
        evt.preventDefault()
        this.setState((state,props)=>{
            return {score: this.state.score + 1}
        })
    }

    decrement = (evt) => {
        evt.preventDefault()
        this.setState((state, props) => {
           return {score: this.state.score - 1}
        })
    }

    reset = (evt) => {
        evt.preventDefault()
        this.setState({score: 0})

    }
    render(){
        return(
            <>
                <h1>SCORE:{this.state.score}</h1>
                    
                    <br />
                    <div>
                        <button style={{marginRight: "5px"}} onClick={this.increment}>Increase</button>
                        <button style={{marginRight: "5px"}} onClick={this.decrement}>Decrease</button>
                        <button style={{marginRight: "5px"}} onClick={this.reset}>Reset</button>
                    </div>
            </>
        )
    }
}

export default Score

