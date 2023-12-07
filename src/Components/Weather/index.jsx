import React, { useState, useEffect } from 'react'
import { WeatherContainer, WeatherBox, SearchBar, SearchWrapper, WeatherBoxes, Box1, Box2, Box3, WeatherText, WeatherType, Current, Tomorrow, SunriseSunset } from './WeatherElement';
import axios from 'axios';
import { Backdrop, Alert } from '@mui/material';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
const libraries = ['places'];

function Weather() {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoError , setAutoError] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [fillup, setFillup] = useState(false);
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const { isLoaded } = useLoadScript({
      googleMapsApiKey,
      libraries,
  }); 

  const handleLoad = (autoC) => setAutocomplete(autoC);
  const clear = () => {document.getElementById('outlined-basic').value = ''};
 


  // Get the city name from the Google API
  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
  
      if (!place || !place.address_components) {
        setAutoError(true);
        setTimeout(() => setAutoError(false), 2000);
        return;
      }
  
      // Update city state only after validating the place
      let city = '';
      let state = '';
      for (const component of place.address_components) {
        const componentType = component.types[0];
        if (componentType === 'locality') {
          city = component.long_name;
        } else if (componentType === 'administrative_area_level_1') {
          state = component.long_name;
        }
      }
      const cityState = city + (state ? ', ' + state : '');
      startAnimation (() => { setCity(cityState) });
      clear();
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  }; 
  
  
  useEffect(() => {
    const fetchDataSequentially = async () => {
      await fetchData();
      await fetchData2();
    };
  
    fetchDataSequentially();
  }, [city]);

  // API weather key and url
  const API_URL = 'https://api.weatherapi.com/v1/current.json';
  const API_URL2 = 'https://api.weatherapi.com/v1/forecast.json'; 


// fetchData function
const fetchData = async () => {
  setLoading(true);
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: weatherApiKey,
        q: city,
      },
    });
    setWeatherData(response.data);
  } catch (error) {
    setError(error.message); // Set specific error message
    setTimeout(() => setError(null), 3000); // Clear error after 3 seconds
  } finally {
    setLoading(false);
  }
};

// fetchData2 function
const fetchData2 = async () => {
  try {
    const response = await axios.get(API_URL2, {
      params: {
        key: weatherApiKey,
        q: city,
        days: 3,
      },
    });
    setForecastData(response.data);
  } catch (error) {
    setError(error.message); // Set specific error message
    setTimeout(() => setError(null), 3000); // Clear error after 3 seconds
  } finally {
    setLoading(false);
  }
}; 



  const startAnimation = (callback) => {  
    const el = document.getElementById('city');
    el.classList.remove('city');
    void el.offsetWidth;
    el.classList.add('city');
  
  setTimeout(callback, 100);
  }; 
  
  

  // Loading animation
  const loadingBalls = () => {  return ( 
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
  >
    <div className='loading-container'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  </Backdrop>
   );
  }; 

const handleFill = () => {
  setFillup(!fillup);
} 
  return (
    <WeatherContainer disableGutters maxWidth='true'>
     {autoError && <Alert className='alert' severity="error">Please select a city from the dropdown menu</Alert>}
     {error && <Alert className='alert' severity="error">{error}</Alert>}
    {weatherData && <WeatherText id='city' className='city'>{weatherData.location?.name}</WeatherText>}
     <WeatherBox id="change" boxShadow={5} fillup={fillup} >
      <SearchWrapper component=''>
       <>
      {isLoaded ? (
                <Autocomplete
                    onLoad={handleLoad}
                    onPlaceChanged={handlePlaceChanged}
                    options={{ types: ['(cities)'] }}
                > 
       <SearchBar fillup={fillup} error={autoError} onFocus={handleFill} id="outlined-basic" placeholder='Select a city' type='text' variant='outlined' />
      </Autocomplete>
            ) : null}
      </> 
      </SearchWrapper>
      <WeatherBoxes fillup={fillup}>

{ weatherData && (

        <Box1>
        <Current className='outsideText'>Current</Current>
        <WeatherType src={weatherData.current.condition.icon} />
        <WeatherText className='temp'><p className='condition'>{weatherData.current.condition.text}</p> <br /> {Math.floor(weatherData.current.temp_f)}°F</WeatherText>
        <WeatherText className='winds'><span className='windsText'>Winds</span> <br /> {Math.floor(weatherData.current.wind_mph)}mph</WeatherText>
        </Box1>

        )}
        

{forecastData && (
  <>
        <Box2>
        <Tomorrow className='outsideText'>Tomorrow</Tomorrow>
        <WeatherType src={forecastData.forecast.forecastday[1]?.day.condition.icon} />
        <WeatherText className='temp'><p className='condition'>{forecastData.forecast.forecastday[1]?.day.condition.text}</p> <br /> {Math.floor(forecastData.forecast.forecastday[1]?.day.maxtemp_f)}°F</WeatherText>
        <WeatherText className='winds'><span className='windsText'>Winds</span> <br /> {Math.floor(forecastData.forecast.forecastday[1]?.day.maxwind_mph)}mph</WeatherText>
       </Box2>
          
  
        <Box3>
          <SunriseSunset className='outsideText'>Sun</SunriseSunset>
          <WeatherText className='sunTime'><span className='sun'>Sunrise</span> <br /> {forecastData.forecast.forecastday[0]?.astro.sunrise}</WeatherText>
          <WeatherText className='sunTime'><span className='sun'>Sunset</span> <br /> {forecastData.forecast.forecastday[0]?.astro.sunset}</WeatherText>
        </Box3>
      </>
)}

      </WeatherBoxes>
      {loading ? loadingBalls() : null}
     </WeatherBox>
    </WeatherContainer>
  )
}

export default Weather;