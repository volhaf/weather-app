import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Weather } from './weather';

function App() {

const [city, setCity] = useState<string>('')
const [error, setError] = useState<null | string> (null)
const [weather, setWeather] = useState<{ temp: number, description: string } | null>(null);

const fetchWeather = () => {
const apiKey = '7f27f04fa1270388142f836aabf821c5'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(json => {
if (json.cod === "404") {
setError('City not found');
} else { 
  setWeather ({
    temp: json.main.temp,
    description: json.weather[0].description
  })

setError(null); 
}
})
.catch(error => {
console.error('Ошибка:', error);
setError('An error occurred'); 
});
}

return (
    <div className="App">
      <h1>weather</h1>
      
      <div><input type = 'text' onChange={(e)=>{setCity(e.currentTarget.value)}}/>
      <button onClick={fetchWeather} > get weather</button></div>
      
      {weather && <Weather temp={weather.temp} description={weather.description} />}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку */}
    </div>
  );
}

export default App;
