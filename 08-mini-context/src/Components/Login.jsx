import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Contexts/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder='username' />
            <input type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='password' />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login