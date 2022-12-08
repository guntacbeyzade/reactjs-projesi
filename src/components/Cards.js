import React from 'react'
import Card from './Card'
import ExampleMemo from './ExampleMemo'

function Cards(props) {
  console.log("cards calisti...4")
  const { country } = props;
  return (
    <div className='cards'>
      {country && country.map((item, index) => <Card item={item} key={index} />)}
      
    </div>
  )

}

//export default React.memo(Cards)
export default (Cards)