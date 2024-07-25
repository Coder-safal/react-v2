import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCouneter] = useState(0);

  const Increment = () => {
    setCouneter(counter + 1);
  }
  const Decrement = () => {
    if (counter <= 0) {
      return;
    }
    setCouneter(counter - 1);
  }

  return (
    <>
      <h1>This is counter Projects!</h1>
      <h2>Counter:{counter}</h2>

      <button onClick={Increment} >Increment:{counter}</button>
      <br />
      <br />
      <button onClick={Decrement}>Decrement:{counter}</button>
    </>
  )
}

export default App
