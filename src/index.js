import React from 'react';
import ReactDOM from 'react-dom';

const userObj = {
    name: 'krys',
    luckyNum: luckyNumber()
};

ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor((Math.random() * 1000) + 1);
}

function greeting(user){
    return <div className="container">
        <h1>Hello, {user.name}!</h1>
        <h2 className="text-muted">Your lucky number is: {user.luckyNum}</h2>
    </div>
}