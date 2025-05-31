import { useRef } from 'react';
import './SoundButton.css';
import type { Sound } from '../../types/types';

type SoundButtonProps = Sound

export const SoundButton = ({ name, url }: SoundButtonProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)

    const handleClick = () => {
        if (!audioRef.current) return

        audioRef.current.volume = 0.5
        audioRef.current.play();
    }

    return <>
        <audio src={url} ref={audioRef}></audio>
        <button className="sound-button" onClick={handleClick}>
            {name}
        </button>
    </>
}