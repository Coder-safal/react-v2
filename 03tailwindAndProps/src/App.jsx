import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Cards.jsx'

function App() {

  return (
    <>
      <h1 className='bg-blue-300 text-black text-xl px-4 py-2 rounded-xl'>
        Tailwind and props Learning!!
      </h1>

      <Card username="Coder-Safal" btnText="Click me!" />
      <Card username="Coder-Boy" btnText="Show me!" />
      <Card username="Coder-Nepal" />


    </>
  )
}

export default App
