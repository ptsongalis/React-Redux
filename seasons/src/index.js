import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component 
{
    
    constructor(props)
    {
        super(props); //must call the super with props passed in

        //this is the only time we do direct assignment to this.state
        this.state = { lat: null, long: null, errorMessage: '' }; 

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {lat: position.coords.latitude, 
                        long: position.coords.longitude
                    });
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    componentDidMount()
    {
        console.log('my component was rendered');
    }

    componentDidUpdate()
    {
        console.log('my component just updated');
    }

    //render is called once when the app starts and 
    //every time the state is modified
    render() //we must define the render method
    {
            if (this.state.errorMessage && !this.state.lat)
            {
                return <div>Error: {this.state.errorMessage}</div>
            }

            if(!this.state.errorMessage && this.state.lat)
            {
                return <div>Latitude: {this.state.lat}</div>
            }

            return <div>Loading...</div>
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);