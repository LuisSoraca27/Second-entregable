import { useState } from 'react'
import './App.css'
import Wheather from './components/Wheather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{display:'flex'}}>
     <Wheather/>
    </div>
  )
}

export default App
