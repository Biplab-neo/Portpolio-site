import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Home } from '../pages/home'

import { About } from '../pages/about'

import { Skills } from '../pages/skills'

import { Contact } from '../pages/contact'

import { Navbar } from '../components/navbar'

import { Projects } from '../pages/projects'

function App() {

  const handlescroll = (targetid) => {
      const target = document.getElementById(targetid);
      if(target){
        target.scrollIntoView({behavior: "smooth"})
      }
  }

  return (
    <>
      <Navbar onnavclick={handlescroll} />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
