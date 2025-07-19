'use client'
import { useState } from 'react'

export default function ConsultarNotas() {
  const [cedula, setCedula] = useState('')
  const [resultado, setResultado] = useState<any>(null)

  const consultarNotas = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/notas/${cedula}`)
    const data = await res.json()
    setResultado(data)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Consultar Notas por Cédula</h1>
      <input
        type="text"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
        placeholder="Ingrese cédula"
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={consultarNotas}>Buscar</button>

      {resultado && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Estudiante:</h3>
          <p><b>Nombre:</b> {resultado.nombre} {resultado.apellido}</p>
          <p><b>Promedio:</b> {resultado.promedio}</p>
          <h4>Notas:</h4>
          <ul>
            {resultado.notas?.map((n: any, i: number) => (
              <li key={i}>{n.nombreMateria} - {n.nota}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
