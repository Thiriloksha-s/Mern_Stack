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
import Login from "./components/FunctionalComponents/Login"
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect'
import UseState from './components/FunctionalComponents/Hooks/UseState'
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI'
import UseRef from './components/FunctionalComponents/Hooks/UseRef'
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo'
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
               <Route path='/use-effect' element={<UseEffect/>}/>
               <Route path='/use-state' element={<UseState/>}/>
               <Route path='/use-effect-api' element={<UseEffectAPI/>}/>
               <Route path='/use-ref' element={<UseRef/>}/>
               <Route path='/use-memo' element={<UseMemo/>}/>
               <Route path='/contact' element={<Contact />}/>
               <Route path='/signup' element={<Signup />}/>
               <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>

      </main>
  )
}

export default App;
