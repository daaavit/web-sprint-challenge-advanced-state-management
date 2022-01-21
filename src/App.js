import React, { Component, useReducer} from "react";
import { createContext } from 'react'
import reducer from './reducers'


import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


const context = createContext()

const App = ()=> {

  const [smurfs, dispatch] = useReducer(reducer, )

  return (
    <div className="App">
      <Header />

      <context.Provider value={smurfs, dispatch}>
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
      </context.Provider>
    </div>
  );
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.