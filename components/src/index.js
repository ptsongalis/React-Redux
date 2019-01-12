import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
       <div className="ui container comments">
   
            <ApprovalCard>
                <div>
                    <h4>WARNING</h4>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail
                    author="Sam"
                    date="6:00PM"
                    text="my blog comment"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail
                    author="Joe"
                    date="4:00PM"
                    text="my blog comment2"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail
                    author="John"
                    date="3:00PM"
                    text="my blog comment3"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

       </div>
        
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));