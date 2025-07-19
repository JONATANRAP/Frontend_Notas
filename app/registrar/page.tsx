'use client'
import { useState } from 'react'

interface Nota {
  nombreMateria: string
  nota: number
}

export default function RegistrarNotas() {
  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [notas, setNotas] = useState<Nota[]>([])
  const [materia, setMateria] = useState('')
  const [nota, setNota] = useState('')
  const [mensaje, setMensaje] = useState('')

  const agregarNota = () => {
    if (!materia || !nota) return
    setNotas([...notas, { nombreMateria: materia, nota: parseFloat(nota) }])
    setMateria('')
    setNota('')
  }

  const enviarFormulario = async () => {
    const body = { cedula, nombre, apellido, notas }
    const res = await fetch('http://localhost:8080/api/v1/notas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (res.ok) {
      setMensaje('Registro exitoso')
    } else {
      setMensaje('Error al registrar')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Registrar Estudiante con Notas</h1>

      <input placeholder="Cédula" value={cedula} onChange={(e) => setCedula(e.target.value)} /><br/>
      <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br/>
      <input placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} /><br/><br/>

      <input placeholder="Materia" value={materia} onChange={(e) => setMateria(e.target.value)} />
      <input type="number" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
      <button onClick={agregarNota}>Agregar Nota</button>

      <ul>
        {notas.map((n, i) => (
          <li key={i}>{n.nombreMateria} - {n.nota}</li>
        ))}
      </ul>

      <button onClick={enviarFormulario}>Enviar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}

