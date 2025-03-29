import { useEffect, useRef, useState } from "react";

function Home() {

    const [weatherData , setWeatherData] = useState(false)
    const city = useRef()
    
    const getWeatherApi = async (city)=>{
        
        
        if (city === '') {
            
            alert('Enter Correct City')
            return

        }




        try {
            const url = `https://api.weatherapi.com/v1/current.json?key=791d24279525411483f120422241811&q=${city}&aqi=no`

            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setWeatherData({
                icon:data.current.condition.icon,
                text:data.current.condition.text,
                degree:data.current.temp_c,
                name:data.location.name,
                country:data.location.country,
                pressure:data.current.pressure_mb,
                humidity:data.current.humidity,
                wind:data.current.wind_kph,
            })
        } catch (error) {
            
        }

    
    }


    useEffect(()=>{

        getWeatherApi('London')

    },[])


    





    return (
        <>

            <div className="flex items-center justify-center min-h-screen bg-[#EAF2F8]">
                <div className="bg-[#2C3E50] p-6 rounded-2xl shadow-lg w-96 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">Weather Search</h2>

                    <div className="flex space-x-2 mb-4">

                        <input
                            ref={city}
                            type="text"
                            placeholder="Enter city name..."
                            className="w-full p-3 rounded-lg border border-gray-400 bg-transparent text-white placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                        />
                        <button onClick={()=>{getWeatherApi(city.current.value)}} type="submit" className="bg-[#3498DB] text-white px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#2471A3] hover:to-[#1B4F72] transition duration-300">
                            Search
                        </button>

                    </div>

                    {/* Weather Info */}
                    <div className="mt-4">
                        <img
                            src={weatherData.icon}
                            alt="Weather Icon"
                            className="mx-auto w-24"
                        />
                        <p className="text-4xl text-white font-bold mt-2">{Math.floor(weatherData.degree)} C</p>
                        <p className="text-lg text-[#B0BEC5] mb-4">{weatherData.text}</p>
                    </div>

                    {/* Weather Details with Vertical Lines */}
                    <div className="flex justify-around items-center text-white mt-4 p-3 bg-[#34495E] rounded-lg">
                        <div className="text-center">
                            <p className="text-sm text-[#B0BEC5]">Wind</p>
                            <p className="text-lg font-semibold">{weatherData.wind} km/h</p>
                        </div>

                        <div className="h-10 w-[1px] bg-gray-500"></div> {/* Vertical Line */}

                        <div className="text-center">
                            <p className="text-sm text-[#B0BEC5]">Humidity</p>
                            <p className="text-lg font-semibold">{weatherData.humidity}%</p>
                        </div>

                        <div className="h-10 w-[1px] bg-gray-500"></div> {/* Vertical Line */}

                        <div className="text-center">
                            <p className="text-sm text-[#B0BEC5]">Pressure</p>
                            <p className="text-lg font-semibold">{weatherData.pressure} hPa</p>
                        </div>
                    </div>

                    {/* Selected City & Date */}
                    <div className="mt-6 text-white text-lg font-semibold">
                        <p>{weatherData.name}</p>
                        <p className="text-sm text-[#B0BEC5]">{weatherData.country}</p>
                    </div>
                </div>
            </div>


        </>
    )


}



export default Home