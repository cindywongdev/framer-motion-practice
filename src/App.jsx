import { useState } from 'react'
import './App.css'
import Test from './components/test.jsx'
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Framer Practice</h1>
      <Test/>
      <div className="card">
        <motion.button 
          whileTap={{ scale: 1.1 }}
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </motion.button>
      </div>
    </>
  )
}

export default App
