import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import lowercase from '../utils/lower';
import call from '../utils/apiCall'

function CountryDetails() {
  console.log("detay calistii...7")
  const {area,capital,name,common,cca2}=useParams();
  const [country,setCountry] =useState(undefined)
  useEffect(()=> {
   call(`https://restcountries.com/v3.1/alpha/${lowercase(area)}`,setCountry)
  },[])
  
  return (
    <div className='detail'>
        <h1> Detay Sayfasi </h1>
        <h3>Country : {country ? JSON.stringify(country):""} </h3> 
        
    </div>
  )
  
}

//export default React.memo(CountryDetails)
export default (CountryDetails)