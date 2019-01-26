import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component 
{
    //can initialize state this way
    //same as using constructor and initializing state
    //babel builds constructor for us
    state = {lat: null, errorMessage: ''};

    //best practices say to do data loading in componentDidMount
    //dont do it in the constructor
    componentDidMount() 
    {
        console.log('my component was rendered to the screen');

        //get user current position
        window.navigator.geolocation.getCurrentPosition(
            (position) => 
                this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }
    
    //runs every time component updates, can do more data loading here based on state change
    componentDidUpdate() 
    {
        console.log('my component just updated - it rerendered');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lat={this.state.lat}/> 
        }

        return <Spinner message="Please accept location request"/>
    }

    //render is called once when the app starts and 
    //every time the state is modified
    //RENDER METHOD SHOULD ONLY RETURN JSX
    render() //we must define the render method
    {
           return (
               //wrap our conditional content in static stuff that needs to be there all the time
                <div>
                    {this.renderContent()}
                </div>
           )
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);