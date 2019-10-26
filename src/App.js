import React from 'react';
import './App.css';
import Dog from './Dog/Dog';
import Meal from './Meal/Meal';
import Clock from 'react-live-clock';

function App() {
  return (
    <div className="App">
        <div className="Header">
          <Clock
            format={"dddd, MMMM Do YYYY, h:mm:ss a"}
            ticking={true}
            timezone={'Eastern'}
          />
        </div>
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

setInterval(App, 1000);

export default App;
