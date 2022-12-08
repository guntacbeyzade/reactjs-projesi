import logo from './logo.svg';
import React from 'react'
import './App.css';

import { Route,Routes } from 'react-router-dom'
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import ExampleMemo from './components/ExampleMemo';

function App() {
  console.log("app çalişti...1")
  
  
  return (
    
      <>
      {/*<div><ExampleMemo /></div>*/}
      <Routes>
      <Route  path='/' element={<Countries/>} exact/>
      <Route path='/country-details/:area' element={<CountryDetails/>}/>
      </Routes>
      </>
    
    
  );
}

//export default React.memo(App);
export default (App);

