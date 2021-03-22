import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppHeaderPageTitle from '../../components/AppHeaderPageTitle';
import WeatherForm from '../../components/WeatherForm';
import Alert from '../../components/Alert';
import Layout from './Layout';
class NotFoundLayout extends Layout{
    onSubmitWeatherForm = (city)=>{
        this.props.history.push(`/${city.toLowerCase()}`);
        
        
    } 
    render(){
        return(
            <AppHeader>
                <Alert 
                    isVisible={true} 
                    type="error" title="Miasto nie istnieje" 
                    content="Nie znaleziono takiej strony"/>
                    <AppHeaderPageTitle>
                        Sprawdź<br /> <strong>pogodę </strong>
                    </AppHeaderPageTitle>
                    
                    <WeatherForm onSubmit={this.onSubmitWeatherForm}/>
            </AppHeader>
        );
        
    }
}

export default NotFoundLayout;