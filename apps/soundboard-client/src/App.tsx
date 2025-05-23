import { useEffect, useState } from 'react'
import './App.css'
import type { Sound } from './types/types';

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [sounds, setSounds] = useState<Sound[]>([]);

  const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json()

    setSounds(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>Soundboard Client</h1>
      <div className="card">
        <pre>
          {JSON.stringify(sounds, null, 1)}
        </pre>
      </div>
    </>
  )
}

export default App
