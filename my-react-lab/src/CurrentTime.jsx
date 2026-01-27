import { useEffect, useState } from 'react'

function CurrentTime() {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <div>{currentTime}</div>
    )
}

export default CurrentTime