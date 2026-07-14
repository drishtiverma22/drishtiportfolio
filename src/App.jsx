import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Pagenotfound from './components/Pagenotfound'
import Project from './components/Project'
export default function App() {
  return (
    <div className="min-h-full  from-gray-950 via-gray-900 to-gray-950 text-gray-100">
   <Navbar/>
   <Hero/>
   <Tech/>
   <Exp/>
   <Project/>
   <Contact/>
   <Footer/>
   <Pagenotfound/>
   </div>
  )
}
