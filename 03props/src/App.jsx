import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card' 

function App() {
  const [count, setCount] = useState(0)
  let aoj = {
    name: "Arvind",
    age: 25,
    city: "Delhi"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Telwind test</h1>
      <Card username="Arvind"/>
      <Card username="Yadav"/>
    </>
  )
}

export default App
