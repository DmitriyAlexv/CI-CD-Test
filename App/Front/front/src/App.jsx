import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [weather, setWeather] = useState(null)

    const getWeather = async () => {
        try {
            const resp = await fetch("http://localhost:5031/weatherforecast")
            if (resp.ok) {
                setWeather(await resp.json())
            }
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeather()
    },[])
    return (
        <div>
            {weather !== null &&
                <div>
                    {weather[0].date}
                    <br></br>
                    {weather[0].temperatureC}
                    <br></br>
                    {weather[0].temperatureF}
                    <br></br>
                    {weather[0].summary}
                </div>
            }
        </div>
    )
}

export default App
