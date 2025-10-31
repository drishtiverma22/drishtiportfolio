import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Pagenotfound from './components/Pagenotfound'
export default function App() {
  return (
    <div className="min-h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
   <Navbar/>
   <Hero/>
   <Tech/>
   <Exp/>
   <Contact/>
   <Footer/>
   <Pagenotfound/>
   </div>
  )
}
