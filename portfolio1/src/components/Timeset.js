import React, {Component} from 'react';

function Timeset() {
    const element = (
        <div>
            <h1>Hello, my name is Mars!</h1>
            <h2>Right now it is {new Date().toLocaleTimeString()} .</h2>
        </div>
    );
};


export default Timeset;