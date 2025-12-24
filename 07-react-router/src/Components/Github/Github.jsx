import { useLoaderData } from 'react-router'

function Github() {


    //Approach : 1

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/saketkumar123')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    //Approach : 2 (Optimized Way)

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Public Repo: {data.public_repos}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/saketkumar123')
    return response.json()
}