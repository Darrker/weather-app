
import {getCityData} from '../helpers/getCityData';


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