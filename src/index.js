import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1 className="container">React Prototypes!</h1>,
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor((Math.random() * 1000) + 1);
}

function Greeting(user){
    return <div className="container">
        <h1>Hello, {user.name}!</h1>
        <h2 className="text-muted">Your lucky number is: {user.luckyNum}</h2>
    </div>
}