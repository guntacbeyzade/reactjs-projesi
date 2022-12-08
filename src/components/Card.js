import React from 'react'
import CountriesName from './CountriesName'
import Flags from './Flags'
import { Link } from 'react-router-dom'
import ExampleMemo from './ExampleMemo'


function Card(props) {
  console.log("card calisti...5")
  const { name, capital,flags,area,cca2} = props.item
  return (
    <div className='card'>
      <Link to={`/country-details/${cca2} ` }>
      <div className='flag'>
      <Flags flags={flags.png} />
      </div>
      <CountriesName name={name.common} />
      <h4> {capital} </h4>
      <h4></h4>
      </Link>
    </div>
  )
}

//export default React.memo(Card)
export default (Card)