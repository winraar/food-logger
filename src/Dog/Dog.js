import React from 'react';
import './dog.css';

const Dog = (props) => {
    return (
        <div className = "Dog">
            {props.dogName}
        </div>
    );
}

export default Dog;