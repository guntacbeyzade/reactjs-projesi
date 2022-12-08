import React from 'react'
import { useEffect, useState } from 'react';
import call from '../utils/apiCall';
import Cards from './Cards';
import ExampleMemo from './ExampleMemo';

function Countries() {
  console.log("countries calisti...2")
    const [countries, setCountries] = useState([])
    const [sum, setSum] = useState(0)
    useEffect(() => {
      console.log("render edildi...3")
      call("https://restcountries.com/v3.1/all",setCountries)
    }, [setSum])
    console.log(countries);
    function getSome () {setSum(1+2)}
    return (
      <div className="App">
      <a href='#' onClick={()=>getSome()}>Tikla bana</a>
      <ExampleMemo country ={countries && countries} />
      <Cards country={countries && countries} />
    </div>
  )
}

//export default React.memo(Countries) 
export default React.memo(Countries) 