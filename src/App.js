import React from 'react';
import './App.css';
import Dog from './Dog/Dog';
import Meal from './Meal/Meal';

function App() {
  return (
    <div className="App">
        <div className="Profile">
            <Dog dogName = "Zoey" />
            <Meal />
        </div>
        <div className="Profile">
            <Dog dogName = "Boota" />
            <Meal />
        </div>
    </div>
  );
}

export default App;
