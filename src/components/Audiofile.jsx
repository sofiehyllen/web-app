import { useRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types';
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import moment from 'moment/moment'
import play from '../assets/afspiller-play.svg'
import pause from '../assets/afspiller-pause.svg'
import { motion } from 'framer-motion';
import { itemAnimation } from './Animationer';

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
    const {textarea} = props;
  
    Audiofile.propTypes = {
        textarea: PropTypes.string.isRequired,
      };

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
  
    const formattedTime = moment.utc(currentTime * 1000).format('mm:ss')

    return (
        <motion.section className='audio-container spacing-top' variants={itemAnimation}>
            <button className='playbutton' onClick={onPlayClick}>
                {isPlaying ? <img className='img-max' src={pause} alt="pause-button" /> : <img className='img-max' src={play} alt='play-button'/> }
            </button>
            <p className='audiotext'>{textarea}</p>
            <div className='audiowave' ref={containerRef}></div>
            <div className='audiotime'><p>{formattedTime}</p></div>
        </motion.section>
    )
}