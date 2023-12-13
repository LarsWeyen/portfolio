import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import {About,Contact,Projects} from './components/pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className='top' src="src/assets/top.png" alt="top" />
      <main>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      
      <img className='bot' src="src/assets/bot.png" alt="bottom" />
    </>
  )
}

export default App
