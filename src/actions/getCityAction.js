
import {getCityData} from '../helpers/getCityData';

// Redux Action który pobiera informacje o pogodzie z 3 ostatnich dni
export const getCityAction = city =>{
    return async function(dispatch){
        
        try{
            var cityData = await getCityData(city,3);
        }
        catch{
            dispatch({
                type: 'SET_ERROR',
                
            });
        }
        
        dispatch({
            type: 'GET_WEATHER_FOR_CITY',
            payload: cityData
        });
    }
   
}