import './App.css'
import Card from './components/Card'
function App() {

  const myObjRef = {
    username: 'Keerat',
    age: 4
  }

  const myArrRef = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      {/* <Card myname='Saket' myObj={myObjRef} />
      <Card myname='Seema' myArr={myArrRef} /> */}

      <Card myname='Saket' designation='Senior Developer' clickbtn='click me' />
      <Card myname='Seema' designation='House Wife' clickbtn='visit me' />
    </>
  )
}

export default App
