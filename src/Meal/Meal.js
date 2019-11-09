import React from 'react';

const types = [
    'brekkie',
    'lunch',
    'dinner'
]

const Meal = () => {
    return (
        <div>
            {types.map(function(type, index){
                return <div key={ index }>
                    <input type="checkbox" id="meal" name="meal" />
                    <label htmlFor="meal">{type}</label>
                </div>;
            })}
        </div>
    );
}

export default Meal;