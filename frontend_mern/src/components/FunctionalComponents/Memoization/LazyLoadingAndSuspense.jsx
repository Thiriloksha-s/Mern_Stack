import React from 'react'
import {Suspense,lazy} from "react"
const LazyComp=lazy(()=>import ("../Signup"))

const LazyLoadingAndSuspense = () => {
  return (
    <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <h2>This is lazy component</h2>
          <LazyComp/>
        </Suspense>
        
    </div>
  
  )
}

export default LazyLoadingAndSuspense