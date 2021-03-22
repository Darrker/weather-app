import axios from 'axios';
import {getCurrentHour} from './getCurrentHour';
export var getCityData = async (city, days) =>{
    var currentWeatherData = {
        heat: [],
        wind: [],
        humidity: [],
    };
   
    await  axios.get(`http://api.weatherapi.com/v1/forecast.json?key=8029ff9950ad44ffbc6172002211803&q=${city}&days=${days}&aqi=no&alerts=no`)
    .then(response =>{
        var currentHour = getCurrentHour();
        var forecastDay = response.data.forecast.forecastday;
        if(days > 1){
            forecastDay.forEach(day =>{
                currentWeatherData.heat.push(day.hour[currentHour].temp_c);
                currentWeatherData.wind.push(day.hour[currentHour].wind_kph);
                currentWeatherData.humidity.push(day.hour[currentHour].humidity);
            });
        }else{
            forecastDay.forEach(day =>{
                currentWeatherData.heat = day.hour[currentHour].temp_c;
                currentWeatherData.wind = day.hour[currentHour].wind_kph;
                currentWeatherData.humidity = day.hour[currentHour].humidity;
            });
        }
           
      
    });

    return currentWeatherData;
}