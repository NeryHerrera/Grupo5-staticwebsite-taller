import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Arreglo con los datos extraídos de la imagen
const integrantes = [
  { carnet: '999020461', nombre: 'Nery Eduardo Herrera Cottom' },
  { carnet: '999020669', nombre: 'Katherine Lisseth Sánchez Girón' },
  { carnet: '999019737', nombre: 'Jorge Alfredo Pisquiy López' },
  { carnet: '999020427', nombre: 'Pablo Andrés Axpuac Arévalo' },
  { carnet: '999019008', nombre: 'Carlos Alexander Marroquín H.' }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Grupo 5 - TALLER 2</h1>
      <h2>Curso de ARQUI</h2>
      
      {/* Sección agregada con la lista de integrantes */}
      <div style={{ textAlign: 'left', backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>Integrantes del Grupo:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {integrantes.map((estudiante) => (
            <li key={estudiante.carnet} style={{ margin: '8px 0' }}>
              <strong>{estudiante.carnet}</strong> - {estudiante.nombre}
            </li>
          ))}
        </ul>
      </div>

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