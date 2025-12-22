import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const increaseCounter = () => {
    if (counter < 20)
      setCounter(counter + 1);

  }

  const decreaseCounter = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>My React Learning with Chai Aur Code {counter}</h1>
      <button onClick={increaseCounter}>Increase {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrease {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
