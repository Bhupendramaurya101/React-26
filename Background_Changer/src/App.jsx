import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBGColor] = useState("black");
  const [color, setcolor] = useState("white");

  return (
    <div className='w-100vh h-[100vh] flex justify-center'
      style={{ backgroundColor: bgColor, color: color }}>
      <h1 className='text-[32px] font-bold m-6'>This is Background Color Changer.</h1>

      <div className='fixed bottom-6 m-8 w-full flex justify-center py-3'>
        <div className='flex justify-center gap-3 px-3 py-3 rounded-full shadow-lg'
          style={{ backgroundColor: "white" }}>
          
          <button onClick={() =>{setBGColor("yellow"); setcolor("black")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "yellow", color: "black"}}>
            Yellow
          </button>
          
          <button onClick={() =>{setBGColor("red")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "red" }}>
            Red
          </button>

          <button onClick={() =>{setBGColor("orange")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "orange" }}>
            Orange
          </button>

          <button onClick={() =>{setBGColor("pink"); setcolor("black")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "pink", color: "black"}}>
            Pink
          </button>

          <button onClick={() =>{setBGColor("blue"); setcolor("white")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "blue", color: "white"}}>
            Blue
          </button>
          <button onClick={() =>{setBGColor("skyblue"); setcolor("black")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "skyblue", color: "black"}}>
            Sky Blue
          </button>

          <button onClick={() =>{setBGColor("green"); setcolor("white")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "green", color: "white"}}>
            Green
          </button>
          <button onClick={() =>{setBGColor("lightgreen"); setcolor("black")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "lightgreen", color: "black"}}>
            Light Green
          </button>
          <button onClick={() =>{setBGColor("black"); setcolor("white")}}
            className='rounded-full px-4 py-1 shadow-lg'
            style={{ background: "black", color: "white"}}>
            Black
          </button>
          <button onClick={() =>{setBGColor("white"); setcolor("black")}}
            className='rounded-full px-4 py-1 shadow-lg border-1'
            style={{ background: "white", color: "black"}}>
            white
          </button>
        </div>
      </div>
    </div>

  )
}

export default App
