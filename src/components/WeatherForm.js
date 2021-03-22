import React from 'react';

import {capitalize} from '../helpers/capitalize';
import removeAccents from 'remove-accents';
// formularz do wyboru miasta
class WeatherForm extends React.Component{
    
    constructor(props){
        super(props);
        // Jesli formularz ma domyśłną wartość to ustawimy ją i tworzymy pierwszą literę wielką
        this.state={
            inputValue: typeof this.props.value != 'undefined' ? capitalize(this.props.value) : '',
            
        };
    }

    // emitujemy wartość wpisaną w formularzu wyżej.
    formSubmit = (e) =>{
        e.preventDefault();
        // removeAccents - Usuwa polskie znaki
        this.props.onSubmit(capitalize(removeAccents(this.state.inputValue)));
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