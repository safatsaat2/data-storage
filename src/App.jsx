import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './components/Cosmetics/Cosmetics'
import Shoe from './components/Shoe/Shoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoe></Shoe>
    </div>
  )
}

export default App
