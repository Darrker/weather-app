import React from 'react';
import {Redirect} from 'react-router-dom';


class WeatherForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            inputValue: typeof this.props.value != undefined ? this.props.value : '',
            ifRedirect: false,
        };
    }

    formSubmit = (e) =>{
        e.preventDefault();
        this.setState({ifRedirect: true});
    }
    render(){
        if(this.state.ifRedirect){
            return <Redirect to={`/${this.state.inputValue}`}/>
        }
        return(
            <form action="" className="weather-form" onSubmit={e => this.formSubmit(e)}>
                <input 
                    className="weather-form__field" 
                    type="text" 
                    name="city" 
                    placeholder="Wpisz miasto"
                    value={this.state.inputValue}
                    onChange={e => this.setState({inputValue: e.target.value})} />
                <button className="weather-form__button" type="submit">Sprawdź </button>
            </form>
        );
    }
}

export default WeatherForm;