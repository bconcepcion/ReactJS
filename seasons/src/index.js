import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null};
        {/**whenver you want state to be a number eventually
        set initial state to null */}
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {this.setState({lat: position.coords.latitude})},
            (err)=>console.log(err)
        )
        return <div>Latitude:{this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);