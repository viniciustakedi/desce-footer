import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='teste'>
      <nav>
        <h1>Menu</h1>
      </nav>
      <div className='main'>
        <h1>Home</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(state => state + 1)}>Teste</button>
      </div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </main>
  )
}

export default App
