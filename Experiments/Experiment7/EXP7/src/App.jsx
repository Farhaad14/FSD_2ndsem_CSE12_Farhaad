import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './StudentCard.jsx'

function App() {
  

  return (
    <div className='bg-red-500'>
      <h1>Student Cards</h1>
      <StudentCard name = "farhaad" marks = "30" grade = "A"/>
      <StudentCard name = "John dree" marks = "24" grade = "B"/>
      <StudentCard name = "ABCD" marks = "3" grade = "C"/>
    </div>
  )
}

export default App
