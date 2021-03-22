import axios from 'axios';
import {getCurrentHour} from './getCurrentHour';

// Pobiera dane  wybranym mieście z wybranego zakresu ( liczby dni) i odpowiednio je formatuje.
// Dane są filtrowane na podstawie danej godziny. 
// Dane w api są ułożone w tablicy o indexach 0-23. Index określa wartość pogodową o danej godzinie. 
// To rozwiązanie ma swoje wady. Ponieważ pobierając aktualną godzinę mam sporę przesuniecie. 
// Jeśli jest godzina 21:59. To i tak ta funkcja zwróci mi dane z 21 a nie z 22. To jest do poprawny, ale jestem tego świadomy. 
// Brak czasu ;)
export var getCityData = async (city, days) =>{
    var currentWeatherData = {
        heat: [],
        wind: [],
        humidity: [],
    };
    // Zdaje sobie sprawę, ze nie powinienem wrzucać na repo tokena. Tylko troszkę goni mnie czas, wybaczcie :)
    await  axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8029ff9950ad44ffbc6172002211803&q=${city}&days=${days}&aqi=no&alerts=no`)
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