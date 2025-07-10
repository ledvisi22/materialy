import { useEffect, useState } from 'react'
import type { Sound } from '../../types/types';
import { SoundButton } from '../SoundButton/SoundButton';

const API_URL = import.meta.env.VITE_SOUNDBOARD_API_URL
const EXAMPLE_AUDIO_URL = `${API_URL}/sounds/discord.mp3`


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
      <header>
        <h1>Soundboard Client</h1>
      </header>
      <main>
        <section>
          <SoundButton name='Discord' url={EXAMPLE_AUDIO_URL} />
        </section>
        <section>
          <pre>
            {JSON.stringify(sounds, null, 1)}
          </pre>
        </section>
      </main >
    </>
  )
}

export default App
