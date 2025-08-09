import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    setCount(count + 1)
  }
  const removevalue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <h1>Hello Guys</h1>
        <h2>counter value {count}</h2>
        <button onClick={addvalue}>add value {count}</button>
        <br />
        <button onClick={removevalue}>remove value {count}</button>
      </div>
  
    </>
  )
}

export default App
