import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Wheather = () => {

  const [wheather, setwheather] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3608e7b9b4424fbcec68d1d43d0b8d5b&units=metric`)
        .then((res) => {
          setwheather(res.data);
          setWeatherTemp(Math.round(res.data.main.temp));
        }
        )
        .catch(res => console.log(res));
    }
    navigator.geolocation.getCurrentPosition(success);

  }, [])
  console.log(wheather)
  console.log(weatherTemp)

 const changeTemp = () => {
  setIsCelsius(!isCelsius)
  if(isCelsius) {
    setWeatherTemp((weatherTemp * 1.8) + 32)
  } else {
    setWeatherTemp((weatherTemp - 32) / 1.8)
  }

 }

  return (
    <div className='appcard' >
      <h1>Wheather App</h1>
      <h2>{wheather.name}, {wheather?.sys?.country}  </h2>
      <h4>
        <i className="fa-solid fa-wind"></i>
        <b> Wind speed: </b>
        {wheather?.wind?.speed} m/s
      </h4>
      <h3>{wheather.weather?.[0].description}</h3>
      <img src={`http://openweathermap.org/img/wn/${wheather.weather?.[0].icon}@2x.png`} />
      <h1>{weatherTemp} {isCelsius ? '°C' : '°F'}</h1>
      <button onClick={changeTemp}>°C / °F</button>
    </div>
  );
};

export default Wheather;