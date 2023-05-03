import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <nav>
        <h1>Menu</h1>
      </nav>
      <div className='content'>
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
