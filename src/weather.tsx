type PropsWeatherType = {
    temp: number
    description: string

}


export const Weather = ({temp, description}: PropsWeatherType) => {
    return (
        <div className="weather">
        <p>Temperature: {temp}</p>
        <p>Weather: {description}</p>
    </div>
    )
}