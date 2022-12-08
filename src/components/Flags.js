import React from 'react'

function Flags(props) {
  console.log("flags calisti...6")
    const {flags} = props
  return (
    <div>
        <img src={flags}  />
    </div>
  )
}

export default React.memo(Flags)