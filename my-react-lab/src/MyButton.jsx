import React from 'react'
import './MyButton.css'

function MyButton() {
    return (
        <button className='msg-btn'>
            <span className='icon'>&#9993;</span>
            <span className='text'>MESSAGE</span>
        </button>
    )
}

export default MyButton