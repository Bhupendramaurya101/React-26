import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  

  return (
    <div>
      <h1 className='bg-red-500 text-white text-2xl font-medium m-10 p-4 rounded w-60 m-10'>
        Hi! This is H1 tag
      </h1>
      <div className='flex'>
        <Cards name = "userName"  clickMSG = "More Info"/>
        <Cards name = "Test Name" clickMSG = "click to visit"/>
      </div>

    </div>
  )
}

export default App
