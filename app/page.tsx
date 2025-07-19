
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <main className="home-container">
      <h1>Bienvenido al Sistema de Notas</h1>
      <div className="menu">
        <Link href="/registrar" className="btn">Registrar Notas</Link>
        <Link href="/consultar" className="btn">Consultar Notas</Link>
      </div>
    </main>
  );
}

