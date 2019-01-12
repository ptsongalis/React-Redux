import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
       <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                date="Today at 6:00PM" 
                text="First Comment" 
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="Joe" 
                date="Today at 3:00PM" 
                text="Second Comment" 
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="John" 
                date="Today at 12:00PM" 
                text="Third Comment" 
                avatar={faker.image.avatar()}
            />
       </div>
        
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));