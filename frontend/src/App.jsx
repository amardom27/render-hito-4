import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Estado para guardar el mensaje del backend
  const [message, setMessage] = useState('Cargando...')

  useEffect(() => {
    // Llamada simple al endpoint definido en tu backend
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch((error) => {
        console.error('Error fetching message:', error)
        setMessage('Error al conectar con el backend')
      })
  }, []) // El array vacío asegura que solo se ejecute al montar el componente

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#646cff' }}>
        {message}
      </p>

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
