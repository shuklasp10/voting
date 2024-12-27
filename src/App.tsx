import './styles/App.css'
import Result from './Result'
import Vote from './Vote'
import { poll, Poll, Options } from './Poll'
import { useState } from 'react'
import VoteForm from './VoteForm'


function App() {
  const [pollData, setPollData] = useState<Poll>(poll)
  const [viewWinner, setViewWinner] = useState<boolean>(false)
  const [viewForm, setViewForm] = useState<boolean>(false)

  function onVote(id: number): void {
    let newOptions:Options[] = [...pollData.options]
    newOptions[id].votes += 1
    setPollData({ ...pollData, options: newOptions });
  }
  
  function onReset(): void {
    let newOptions:Options[] = [...pollData.options]
    newOptions[0].votes = 0
    newOptions[1].votes = 0
    setPollData({ ...pollData, options: newOptions });
    setViewWinner(false)
  }

  return (
    <div className='app'>
      {viewForm ?
        <VoteForm setPollData={setPollData} setViewForm={setViewForm} /> :
        <>
          <h1>{pollData.question}</h1>
          <Vote options={pollData.options} viewWinner={viewWinner} onVote={onVote} />
          <Result options={pollData.options} viewWinner={viewWinner} setViewWinner={setViewWinner} onReset={onReset} />
          <button className='form-button' onClick={() => setViewForm(true)}>Create</button>
        </>
      }
    </div>
  )
}

export default App
