import React from 'react';


import {capitalize} from '../helpers/capitalize';
class WeatherForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            inputValue: typeof this.props.value != 'undefined' ? capitalize(this.props.value) : '',
            
        };
    }

    formSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(capitalize(this.state.inputValue));
    }
    render(){
      
        return(
            <form action="" className="weather-form" onSubmit={e => this.formSubmit(e)}>
                <input 
                    className="weather-form__field" 
                    type="text" 
                    name="city" 
                    placeholder="Wpisz miasto"
                    value={this.state.inputValue}
                    onChange={e => this.setState({inputValue: capitalize(e.target.value)})} />
                <button className="weather-form__button" type="submit">Sprawdź </button>
            </form>
        );
    }
}

export default WeatherForm;