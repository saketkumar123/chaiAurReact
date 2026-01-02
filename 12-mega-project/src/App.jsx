import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth-service'
import { login, logout } from './store/authSlice'
import { Header } from './components/index'
import { Footer } from './components/index'
import { Outlet } from 'react-router'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then(() => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
