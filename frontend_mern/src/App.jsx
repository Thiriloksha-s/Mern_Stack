import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionalComponents/Home"
import About from "./components/FunctionalComponents/About"
import Form from "./components/FunctionalComponents/Form"
import Gallery from "./components/FunctionalComponents/Gallery"
import Skills from "./components/FunctionalComponents/Skills"

function App() {
  return (
      <div>
         <h1>Welcome to React</h1>
         <Home></Home>
         <About></About>
         <Form></Form>
         <Gallery></Gallery>
         <Skills></Skills>
      </div>
  )
}

export default App
