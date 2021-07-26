import React from 'react'
import { Navbar } from "../src/components/navbar/Navbar"
import { Footer } from "../src/components/footer/Footer"
import { HomeView } from "../src/views/HomeView"
import "../src/global/globalStyle.scss"


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HomeView />
      <Footer/>
    </div>
  )
}

export default App;
