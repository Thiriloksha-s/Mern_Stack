import React from 'react'
import {useContext} from "react"
import { ResPub } from '../CoE'

const StudentResults = () => {
    
  const result=useContext(ResPub)
  return (
    <div>
        <h1>Result</h1>
        <h2>CGPA:{result.cgpa}</h2>
        <h3>SGPA:{result.sgpa}</h3>
    </div>
  )
}

export default StudentResults