import React from 'react';

class WeatherForm extends React.Component{
    
    formSubmit = (e) =>{
        e.preventDefault();
        
        this.props.onSubmit();
    }
    render(){
        return(
            <form action="" className="weather-form" onSubmit={e => this.formSubmit(e)}>
                <input className="weather-form__field" type="text" name="city" placeholder="Wpisz miasto" />
                <button className="weather-form__button" type="submit">Sprawdź </button>
            </form>
        );
    }
}

export default WeatherForm;