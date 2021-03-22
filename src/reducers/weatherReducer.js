// Redux reducer który obsługuje dane akcje i manipuje stanem

export const weatherReducer = (state = {error: false}, action)=>{
    switch(action.type){
        // dane pogodowe konkretnego miasta
        case 'GET_WEATHER_FOR_CITY':{
            return Object.assign({...state},{currentCity: {...action.payload}});
            
        }
         // dane pogodowe wybranych miast
        case 'GET_WEATHER_FOR_POPULAR_CITIES':{
            return Object.assign({...state},{popularCities: [...action.payload]});
           
        }
        // włącz error
        case 'SET_ERROR':{
            
            return Object.assign({...state},{error: true});
           
        }
        case 'DISABLE_ERROR':{
            
            return Object.assign({...state},{error: false});
           
        }
        // wyłącz error
        default: {
            return state;
        }
    }

    return state;
       
}