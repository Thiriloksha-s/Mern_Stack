import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionalComponents/Home"
import About from "./components/FunctionalComponents/About"
import Signup from "./components/FunctionalComponents/Signup"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
import Navbar from './components/FunctionalComponents/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
      <main>
        <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home properties="Hello" sjit=" sjit"/>}/>
               <Route path='/about' element={<About />}/>
               <Route path='/gallery' element={<Gallery />}/>
               <Route path='/contact' element={<Contact />}/>
               <Route path='/signup' element={<Signup />}/>
            </Routes>
        </BrowserRouter>

      </main>
  )
}

export default App;
