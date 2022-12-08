import React, { useState,useEffect,memo } from 'react'
import CountriesName from './CountriesName'


function ExampleMemo(props) {
  
  console.log("examplememo calisti...7")
  // const  [users,setUsers] =useState([])
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => setUsers(data))
  // },[])
  return (
    <div>
    {/* {users.map((user) =>(
      <div key={user.id}>{user.name}</div>
    ))}
    <h3>ExampleMemo</h3> */}
    </div>
  )
}
//export default React.memo(ExampleMemo)
export default memo(ExampleMemo)
