export const weatherReducer = (state = {error: false}, action)=>{
    switch(action.type){
        case 'GET_WEATHER_FOR_CITY':{
            return Object.assign({...state},{currentCity: {...action.payload}});
            
        }
        case 'GET_WEATHER_FOR_POPULAR_CITIES':{
            return Object.assign({...state},{popularCities: [...action.payload]});
           
        }
        case 'SET_ERROR':{
            
            return Object.assign({...state},{error: true});
           
        }
        case 'DISABLE_ERROR':{
            
            return Object.assign({...state},{error: false});
           
        }
        default: {
            return state;
        }
    }

    return state;
       
}