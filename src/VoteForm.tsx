import React, { useRef, useState } from 'react'
import { Poll } from './Poll'
import './styles/VoteForm.css'

type VoteFormPropType = {
    setPollData: React.Dispatch<React.SetStateAction<Poll>>,
    setViewForm: React.Dispatch<React.SetStateAction<boolean>>
}

const VoteForm: React.FC<VoteFormPropType> = ({ setPollData, setViewForm }) => {
    const questionRef = useRef<HTMLInputElement>(null)
    const option1Ref = useRef<HTMLInputElement>(null)
    const option2Ref = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<boolean>(false)

    function onSubmit(): void {
        if (!(questionRef.current?.value && option1Ref.current?.value && option2Ref.current?.value)) {
            setError(true)
            return
        }
        else {
            setError(false)
            setViewForm(false)
            setPollData({
                question: questionRef.current.value,
                options: [
                    { id: 0, title: option1Ref.current?.value, votes: 0 },
                    { id: 1, title: option2Ref.current?.value, votes: 0 }
                ]
            })
        }
    }

    return (
        <>
            <input id='title' type="text" placeholder='Question' required ref={questionRef} />
            <div className='vote-container'>

                <section className='vote-options' id={`choice1`}>
                    <h2><input type="text" placeholder='Option 1' required ref={option1Ref} /></h2>
                    {/* <button disabled={viewWinner} onClick={() => onVote(option.id)}>Vote</button> */}
                </section>
                <section className='vote-options' id={`choice2`}>
                    <h2><input type='text' placeholder='Option 2' required ref={option2Ref} /></h2>
                    {/* <button disabled={viewWinner} onClick={() => onVote(option.id)}>Vote</button> */}
                </section>
            </div>
            {error && <section>Fill all the details!</section>}
            <button className='form-button' onClick={onSubmit}>Submit</button>
        </>
    )
}

export default VoteForm