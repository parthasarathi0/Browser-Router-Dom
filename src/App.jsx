import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import Navbar from './assets/pages/Navbar'
import Location from './assets/pages/Location'
import User from './assets/pages/User'
import About from './assets/pages/About'
import NotFound from './assets/pages/NotFound'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/User/:UserName' element={<User/>}/>
  <Route path='/Location' element={<Location/>}/>
  <Route path='/Contact' element = {<Contact/>}/>
  <Route path='*' element = {<NotFound/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App