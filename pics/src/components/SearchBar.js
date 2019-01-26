import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };


    onFormSubmit = (event) => { //use an arrow function to bind "this" to the class object
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    //leave parentheses off "onInputChange" to call at some time in the future
    //with parentheses the function will be called every time render() is called

    //onChange -> function called when input is changed
    //onClick -> function called when user clicks something
    //onSubmit -> called when user submits a form

    //controlled vs uncontrolled components
    //  store information in react vs storing information in html 
    //  use state to store inputs so react doesn't have to look at DOM to get info
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;