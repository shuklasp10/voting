import React from 'react'
import { Options } from './Poll'
import './styles/Result.css'

type ResultPropType = {
  options: Options[],
  viewWinner: boolean,
  setViewWinner: Function,
  onReset: () => void
}

const Result: React.FC<ResultPropType> = ({ options, viewWinner, setViewWinner, onReset }) => {
  console.log(options);

  return (
    <div className='result'>
      {(options[0].votes == options[1].votes) ?
        <section>It's a tie</section> :
        (viewWinner ?
          <section>{`${options[0].votes > options[1].votes ? options[0].title : options[1].title} won by ${Math.abs(options[0].votes - options[1].votes)} vote(s)`}</section> :
          <section>
            {`${options[0].votes > options[1].votes ? options[0].title : options[1].title} is leading by ${Math.abs(options[0].votes - options[1].votes)} vote(s)`}
          </section>
        )
      }
      {viewWinner ?
        <button className='vote-button' onClick={onReset}>Reset</button> :
        <button className='vote-button' onClick={() => setViewWinner(!viewWinner)} disabled={options[0].votes + options[1].votes == 0}>View Winner</button>
      }
    </div>
  )
}

export default Result