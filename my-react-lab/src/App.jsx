import { useState } from 'react';
import './App.css'
import './ThemeToggle/ThemeToggle.css'
import ThemeToggle from './ThemeToggle/ThemeToggle';
import Button from './Button'
import CurrentTime from './CurrentTime';
import MyButton from './MyButton';
import MyList from './MyList';

function App() {
  const message = "Hello, JSX Works!"
  const [dark, setDark] = useState(false)

  const myBtnHandler = () => {
    alert("Btn Clicked");

  }

  const themeToggle = () => {
    setDark(prev => !prev);
  }


  return (
    <div className={dark ? 'dark' : 'light'}>
      <h1>{message}</h1>
      <Button myBtnHandler={myBtnHandler} />
      <CurrentTime />
      <MyList />
      <MyButton />
      <ThemeToggle themeToggle={themeToggle} dark={dark} />
    </div>
  )
}

export default App
