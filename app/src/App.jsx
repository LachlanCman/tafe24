import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ting from './assets/Screenshot (4).png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=09gj5gM4V98&t=3241s" target="_blank">
          <img src='https://www.youtube.com/watch?v=09gj5gM4V98&t=3241s' className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ting} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
