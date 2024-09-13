import { useState } from 'react'
import './App.css'
import ClassBasedComponents from './components/class-based-component'
import FunctionalComponent from './components/FunctionalComponent'
import ClassBasedComponent from './components/class-based-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React JS Concepts 2024</h1>
        <ClassBasedComponent />
        <FunctionalComponent />
      </div>
    </>
  )
}

export default App
