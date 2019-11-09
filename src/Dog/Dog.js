import React from 'react';
import './dog.css';

const Dog = (props) => {
    return (
        <div className = "Dog">
            <h1>{props.dogName}</h1>
        </div>
    );
}

export default Dog;