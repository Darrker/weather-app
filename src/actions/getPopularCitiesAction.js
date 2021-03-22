
import {getCityData} from '../helpers/getCityData';

// Redux Action który pobiera informacje o pogodzie z jednego dnia dla wybranych miast.
export const getPopularCitiesAction = cities =>{
    return async function(dispatch){
        var citiesData = [];
       
 
        await Promise.all(cities.map(city => getCityData(city,1)))
        .then(values => { 
           cities.forEach((city,index) =>{
                citiesData.push({name:city, ...values[index]});
             
           });
        })
        .catch(err => {  
            dispatch({
                type: 'SET_ERROR',
               
            });
       
        });
        
        dispatch({
            type: 'GET_WEATHER_FOR_POPULAR_CITIES',
            payload: citiesData
        });
    }
   
}