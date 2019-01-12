//Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
    //function or class
        //produces html to show (using JSX)
        //handles feedback from user (event handlers)

// const App = function() {
//     return <div> Hi there!</div>
// };

function getButtonText() {
    return 'Click On Me';
};

function getLabelText() {
    return 'Enter Name asdf: ';
}

const App = () => {
   
    return (
        <div>
            <label className="label" htmlFor="name"> {getLabelText()} </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor : 'blue', color: 'white'}}> {getButtonText()} </button>
        </div>
    );
}

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);