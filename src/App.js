import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from "./components/Detail";
import Search from './components/Search'
import Navbar from './components/Nova/navo'

function App() {
  return (

    <BrowserRouter>
    <div className="section">
      <div className="rightpanel">
      <div className="App">
        <Navbar />
        
        </div>
        </div>
        
        <div >
        <Route  path="/user" component={Detail} />
        <Route exact={true} path="/repo" component={Search} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;