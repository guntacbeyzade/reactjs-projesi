import React from 'react'
import ExampleMemo from './ExampleMemo'



function CountriesName(props) {
  console.log("countriesname calisti...6")
    const {name} = props
  return (
    <div>
        <h3>  {name} </h3>
        
    </div>
  )
}

//export default React.memo(CountriesName)
export default (CountriesName)