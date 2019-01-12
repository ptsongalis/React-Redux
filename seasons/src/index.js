import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component 
{
    
    constructor(props)
    {
        super(props); //must call the super with props passed in

        this.state = { lat: null, long: null };
    }


    render() //we must define the render method
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude:</div>
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);