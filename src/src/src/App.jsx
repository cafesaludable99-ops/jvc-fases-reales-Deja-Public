import { useState } from 'react'

const fases = [
  { id: 1, nombre: 'Fase 1: Fundamentos', desc: 'Técnica básica y calentamiento' },
  { id: 2, nombre: 'Fase 2: Ataque', desc: 'Remates y bloqueos' },
  { id: 3, nombre: 'Fase 3: Estrategia', desc: 'Juego en equipo y rotaciones' },
  { id: 4, nombre: 'Fase 4: Competencia', desc: 'Torneos y partidos reales' },
]

function App() {
  const [faseSeleccionada, setFaseSeleccionada] = useState(null)

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h1 style={{fontSize: '28px', margin: 0}}>🏐 JVC</h1>
        <p style={{margin: '5px 0', opacity: 0.9}}>Fases Reales</p>
      </div>

      {!faseSeleccionada ? (
        <div>
          <h2 style={{fontSize: '20px'}}>Selecciona una Fase</h2>
          {fases.map(fase => (
            <div 
              key={fase.id}
              onClick={() => setFaseSeleccionada(fase)}
              style={{
                background: 'white',
                color: '#333',
                padding: '18px',
                margin: '12px 0',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              <h3 style={{margin: '0 0 5px 0'}}>{fase.nombre}</h3>
              <p style={{margin: 0, fontSize: '14px', color: '#666'}}>{fase.desc}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button 
            onClick={() => setFaseSeleccionada(null)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}
          >
            ← Volver
          </button>
          <div style={{
            background: 'white',
            color: '#333',
            padding: '20px',
            borderRadius: '15px'
          }}>
            <h2>{faseSeleccionada.nombre}</h2>
            <p>{faseSeleccionada.desc}</p>
            <p>Aquí luego ponemos los videos y ejercicios.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
