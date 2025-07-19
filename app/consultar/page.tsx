'use client'

import { useState } from 'react'

export default function ConsultarNotas() {
  const [cedula, setCedula] = useState('')
  const [resultado, setResultado] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const consultarNotas = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/notas/${cedula}`)
      if (!res.ok) throw new Error('No se encontraron datos para esa cédula.')
      const data = await res.json()
      setResultado(data)
      setError(null)
    } catch (err: any) {
      setResultado(null)
      setError(err.message)
    }
  }

  const promedio = resultado?.materias?.length
    ? (
        resultado.materias.reduce((acc: number, n: any) => acc + n.nota, 0) /
        resultado.materias.length
      ).toFixed(2)
    : null

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h1>Consultar Notas</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          placeholder="Ingrese cédula"
          style={{ padding: '0.5rem', marginRight: '1rem', width: 200 }}
        />
        <button onClick={consultarNotas}>Buscar</button>
      </div>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          ❌ {error}
        </div>
      )}

      {resultado && (
        <div style={{
          marginTop: '2rem',
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: '1.5rem',
          background: '#fafafa',
          boxShadow: '0 2px 8px #eee'
        }}>
          <h2>{resultado.nombre} {resultado.apellido}</h2>
          <p><strong>Cédula:</strong> {resultado.cedula}</p>
          <h3>Notas</h3>
          {resultado.materias.length > 0 ? (
            <>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ddd', padding: 4 }}>Materia</th>
                    <th style={{ borderBottom: '1px solid #ddd', padding: 4 }}>Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {resultado.materias.map((n: any, i: number) => (
                    <tr key={i}>
                      <td style={{ padding: 4 }}>{n.materia}</td>
                      <td style={{ padding: 4 }}>{n.nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ marginTop: 12 }}>
                <strong>Promedio:</strong> {promedio}
              </p>
            </>
          ) : (
            <p>No hay materias registradas.</p>
          )}
        </div>
      )}
    </div>
  )
}

