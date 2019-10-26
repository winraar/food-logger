import React from 'react';

const types = [
    'brekkie',
    'lunch',
    'dinner'
]

const Meal = () => {
    return (
        <ul>
            {types.map(function(type, index){
                    return <li key={ index }>{type}</li>;
                  })}
        </ul>
    );
}

export default Meal;