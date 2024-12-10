import React from 'react'
import { Options } from './Poll'
import './styles/Vote.css'

type VotePropType = {
    options: Options[],
    viewWinner: boolean,
    onVote: (id:number)=>void
}

const Vote: React.FC<VotePropType> = ({ options, viewWinner, onVote }) => {
    return (
        <div className='vote-container'>
            {options.map((option)=>(
            <section key={option.id} className='vote-options' id={`choice-${option.id}`}>
                <h2>{option.title}</h2>
                <button className='vote-button' disabled={viewWinner} onClick={()=>onVote(option.id)}>Vote</button>
            </section>
            ))}
        </div>
    )
}

export default Vote