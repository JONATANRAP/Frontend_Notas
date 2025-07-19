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

  const promedio = resultado?.notas?.length
    ? (
        resultado.notas.reduce((acc: number, n: any) => acc + n.nota, 0) /
        resultado.notas.length
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
          <h2>{resultado.nombre}</h2>
          <p><strong>Cédula:</strong> {resultado.cedula}</p>
          <h3>Notas</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ddd', padding: 4 }}>Materia</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: 4 }}>Nota</th>
              </tr>
            </thead>
            <tbody>
  {(resultado?.notas || []).map((n: any, i: number) => (
    <tr key={i}>
      <td style={{ padding: 4 }}>{n.materia}</td>
      <td style={{ padding: 4 }}>{n.nota}</td>
    </tr>
  ))}
</tbody>
          </table>

          {promedio && (
            <p style={{ marginTop: 12 }}>
              <strong>Promedio:</strong> {promedio}
            </p>
          )}

          {resultado._links && (
            <div style={{ marginTop: 12 }}>
              {resultado._links.self && (
                <a href={resultado._links.self.href} target="_blank" rel="noopener noreferrer" style={{ marginRight: 12 }}>
                  Ver detalle
                </a>
              )}
              {resultado._links['agregar-notas'] && (
                <a href={resultado._links['agregar-notas'].href} target="_blank" rel="noopener noreferrer">
                  Agregar notas
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
