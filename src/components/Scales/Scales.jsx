import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const ScalesContainer = styled.div`
  font-family: Articulat CF,system-ui,sans-serif;
  padding: 2em 5.25em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 95.75em;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 2em;
  font-size: 2.5em;
`

const RandomButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1em 2em;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2em;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

const ResultContainer = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2em;
  margin: 1em 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
`

const NoteDisplay = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 0.5em;
`

const ScaleDisplay = styled.div`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  
  div {
    display: flex;
    gap: 1em;
    align-items: center;
  }
`

const Placeholder = styled.div`
  font-size: 1.2em;
  color: #999;
  font-style: italic;
`

const MetronomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1em 0;
  padding: 1em;
  background: #f0f0f0;
  border-radius: 8px;
`

const MetronomeButton = styled.button`
  background: ${props => props.isPlaying ? '#e74c3c' : '#27ae60'};
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    opacity: 0.8;
  }
`

const TempoControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  
  input {
    width: 80px;
    padding: 0.3em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

const BeatIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.active ? '#e74c3c' : '#ccc'};
  transition: background 0.1s ease;
`

const Scales = () => {
  const [currentNote, setCurrentNote] = useState('')
  const [currentScale, setCurrentScale] = useState(null)
  const [isMetronomeRunning, setIsMetronomeRunning] = useState(false)
  const [tempo, setTempo] = useState(120)
  const [beatActive, setBeatActive] = useState(false)
  
  const metronomeRef = useRef(null)
  const audioContextRef = useRef(null)

  // List of notes
  const notes = [
    'C', 'D♭', 'D', 'E♭', 'E', 'F', 
    'F♯/G♭', 'G', 'A♭', 'A', 'B♭', 'B'
  ]

  // List of chord/scale types
  const scaleTypes = [
    { numeral: 'I', symbol: '△7', name: 'Major', description: 'Ionian mode' },
    { numeral: 'ii', symbol: '-7', name: 'Dorian', description: 'Dorian mode' },
    { numeral: 'iii', symbol: '-7', name: 'Phrygian', description: 'Phrygian mode' },
    { numeral: 'IV', symbol: '△7', name: 'Lydian', description: 'Lydian mode' },
    { numeral: 'V', symbol: '7', name: 'Mixolydian', description: 'Mixolydian mode' },
    { numeral: 'V', symbol: 'sus', name: 'Mixolydian', description: 'Mixolydian mode' },
    { numeral: 'vi', symbol: '-7', name: 'Aeolian', description: 'Natural Minor' },
    { numeral: 'vii', symbol: 'ø7', name: 'Locrian', description: 'Locrian mode' },
    { numeral: 'I', symbol: '-△7', name: 'Melodic Minor', description: 'Melodic minor' },
    { numeral: 'V', symbol: '7alt', name: 'Altered', description: 'Altered' },
    { numeral: '', symbol: '7', name: 'Blues', description: 'Blues scale' },
    { numeral: '', symbol: 'dim', name: 'Diminished', description: 'Whole-half diminished' }
  ]

  // Metronome functionality
  useEffect(() => {
    if (isMetronomeRunning) {
      const interval = 60000 / tempo // Convert BPM to milliseconds
      
      metronomeRef.current = setInterval(() => {
        // Create metronome sound
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
        }
        
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)
        
        oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime)
        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1)
        
        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.1)
        
        // Visual beat indicator
        setBeatActive(true)
        setTimeout(() => setBeatActive(false), 100)
      }, interval)
    } else {
      if (metronomeRef.current) {
        clearInterval(metronomeRef.current)
      }
    }
    
    return () => {
      if (metronomeRef.current) {
        clearInterval(metronomeRef.current)
      }
    }
  }, [isMetronomeRunning, tempo])

  const toggleMetronome = () => {
    setIsMetronomeRunning(!isMetronomeRunning)
  }

  const rollRandomScales = () => {
    const noteIndex = Math.floor(Math.random() * notes.length)
    
    const scaleIndex = Math.floor(Math.random() * scaleTypes.length)
    
    setCurrentNote(notes[noteIndex])
    setCurrentScale(scaleTypes[scaleIndex])
  }

  return (
    <ScalesContainer>
      <Title>Random Scale Generator</Title>
      
      <RandomButton onClick={rollRandomScales}>
        Roll Random Scale
      </RandomButton>

      <MetronomeContainer>
        <MetronomeButton 
          isPlaying={isMetronomeRunning} 
          onClick={toggleMetronome}
        >
          {isMetronomeRunning ? 'Stop' : 'Start'} Metronome
        </MetronomeButton>
        
        <TempoControl>
          <label>BPM:</label>
          <input 
            type="number" 
            value={tempo} 
            onChange={(e) => setTempo(Number(e.target.value))}
            min="60" 
            max="200"
          />
        </TempoControl>
        
        <BeatIndicator active={beatActive} />
      </MetronomeContainer>

      <ResultContainer>
        {currentNote && currentScale ? (
          <>
            <NoteDisplay>{currentNote}</NoteDisplay>
            <ScaleDisplay>
              <div><strong>Scale: </strong>{currentScale.description}</div>
              <div><strong>Chord: </strong>{currentScale.symbol}</div>
            </ScaleDisplay>
          </>
        ) : (
          <Placeholder>Click the button to generate random note and scale!</Placeholder>
        )}
      </ResultContainer>
    </ScalesContainer>
  )
}

export default Scales
