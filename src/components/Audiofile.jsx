// Denne side er kodet af: Karoline Lerche

import { useRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types';
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import moment from 'moment/moment'
import play from '../assets/afspiller-play.svg'
import pause from '../assets/afspiller-pause.svg'

// Funktion til brug af WaveSurfer
const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null) // Opretter en state for WaveSurfer-objektet
  
    useEffect(() => {
        if (!containerRef.current) return // Hvis containeren ikke eksisterer, afbryd

        const ws = WaveSurfer.create({ // Opretter en WaveSurfer-instans med givne options og container
        ...options,
        container: containerRef.current,
        })
        setWavesurfer(ws) // Opdaterer wavesurfer state med den oprettede instans

        // Ryd op efter komponenten ved at ødelægge WaveSurfer-instansen
        return () => {
        ws.destroy()
        }
    }, [options, containerRef]) // Lytter efter ændringer i options og containerRef
    return wavesurfer
}

export default function Audiofile(props){

    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = useWavesurfer(containerRef, props)
    const {textarea} = props;
  
    // Prop type validering
    Audiofile.propTypes = {
        textarea: PropTypes.string.isRequired,
      };

    // Funktion til afspil/pause knap
    const onPlayClick = useCallback(() => {
      wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    }, [wavesurfer])
  
    // Effekt til håndtering af lydafspilning
    useEffect(() => {
      if (!wavesurfer) return
  
      setCurrentTime(0)
      setIsPlaying(false)
  
      const subscriptions = [
        wavesurfer.on('play', () => setIsPlaying(true)),
        wavesurfer.on('pause', () => setIsPlaying(false)),
        wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
      ]
  
      return () => {
        subscriptions.forEach((unsub) => unsub())
      }
    }, [wavesurfer])
  
    // Formatering af tid til minutter og sekunder
    const formattedTime = moment.utc(currentTime * 1000).format('mm:ss')

    // Visning af lydafspiller og tekst
    return (
        <section className='audio-container spacing-top'>
            <button className='playbutton' onClick={onPlayClick}>
                {isPlaying ? <img className='img-max' src={pause} alt="pause-button" /> : <img className='img-max' src={play} alt='play-button'/> }
            </button>
            <p className='audiotext'>{textarea}</p>
            <div className='audiowave' ref={containerRef}></div>
            <div className='audiotime'><p>{formattedTime}</p></div>
        </section>
    )
}