import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedSplCharacter, setAllowedSplCharacter] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef(null)

  let passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowedNumber) str += "0123456789"
    if (allowedSplCharacter) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, allowedNumber, allowedSplCharacter, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowedNumber, allowedSplCharacter, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          className='outline-none w-full py-1 px-3'
          type="text"
          value={password}
          ref={passRef}
          placeholder='Password'
          readOnly />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            onChange={(e) => { setLength(e.target.value) }}
            type="range"
            name="pass-length"
            min={8}
            max={100}
            value={length} />
          <label htmlFor="pass-length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            onChange={() => setAllowedNumber((prev) => !prev)}
            type="checkbox"
            name="number" />
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            onChange={() => setAllowedSplCharacter((prev) => !prev)}
            type="checkbox"
            name="splCharacter" />
          <label htmlFor="splCharacter">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
