import { useParams } from 'react-router'

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-600 text-center text-white text-3xl p-4'>User: {userid}</div>
    )
}

export default User