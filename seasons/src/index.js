import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component 
{
    
    constructor(props)
    {
        super(props); //must call the super with props passed in

        //this is the only time we do direct assignment to this.state
        this.state = { lat: null, long: null }; 

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude});
            },
            (err) => console.log(err)
        );
    }


    render() //we must define the render method
    {
        return <div>Latitude: {this.state.lat} Longitude: {this.state.long}</div>
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);