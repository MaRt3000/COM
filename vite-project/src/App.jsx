import React from 'react'
import AboutUs from './components/AboutComponents/AboutUs'
import {Routes, Route} from 'react-router-dom'
import ContactSection from './components/ContactSection'
import './App.css'

import { LandingPage } from './components/LandingPage'

function App() {
  

  return (
    <Routes>
     <Route path='' element={<LandingPage />} />
     <Route path='/LandingPage' element={<LandingPage />} />
     <Route path='/AboutUs' element={<AboutUs />} />
     <Route path='/ContactSection' element={<ContactSection />} />

    </Routes>
  )
}

export default App
