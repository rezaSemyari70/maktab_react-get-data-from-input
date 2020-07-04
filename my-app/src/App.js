import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent  from './TestComponent';

function App() {
  return (
    <div className="App">
      <h1 style={{
        marginTop : '100px' ,
        color: 'darkgreen',
        fontSize: 40,
      }}>Get Personal Information</h1>
      <MyComponent/>
    </div>
  );
}

export default App;
