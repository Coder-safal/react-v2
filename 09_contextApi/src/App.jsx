import { useState } from 'react'
import { ContextProvider } from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider >
  )
}

export default App
