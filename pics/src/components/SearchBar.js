import React from 'react';

class SearchBar extends React.Component 
{
    onInputChange(event) {
        console.log(event.target.value);
    }

    //leave parentheses off "onInputChange" to call at some time in the future
    //with parentheses the function will be called every time render() is called

    //onChange -> function called when input is changed
    //onClick -> function called when user clicks something
    //onSubmit -> called when user submits a form
    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange= {this.onInputChange}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;