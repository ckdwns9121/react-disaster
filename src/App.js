import React,{useEffect} from 'react';
import './App.css';
import {getDisasterMsg} from './api/getDisasterMsg';
import DisasterContainer from './containers/DisasterContainer';



function App() {



  return (
    <div className="App">
      <DisasterContainer/>
    </div>
  );
}

export default App;
