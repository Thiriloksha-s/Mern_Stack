import React from 'react'
import {memo,useState} from 'react'
const Number = () => {
  var[number,setNumber]=useState(0)
  return (
    <div>
        <h2>This is number box</h2>
        <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        <h3>The number typed is {number}</h3>
    </div>
  )
}

export default memo(Number)