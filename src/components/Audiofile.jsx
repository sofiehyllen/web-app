import { useRef, useState, useEffect, useCallback } from 'react'
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null)
  
    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
      if (!containerRef.current) return
  
      const ws = WaveSurfer.create({
        ...options,
        container: containerRef.current,
      })
  
      setWavesurfer(ws)

      return () => {
        ws.destroy()
      }
    }, [options, containerRef])
  
    return wavesurfer
  }

export default function Audiofile(props){
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = useWavesurfer(containerRef, props)
  
    // On play button click
    const onPlayClick = useCallback(() => {
      wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    }, [wavesurfer])
  
    // Initialize wavesurfer when the container mounts
    // or any of the props change
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
  
    return (
      <>
        <div ref={containerRef} />
  
        <button onClick={onPlayClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
  
        <p>Seconds played: {currentTime}</p>
      </>
    )
}