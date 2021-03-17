import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppHeaderPageTitle from '../../components/AppHeaderPageTitle';
import WeatherForm from '../../components/WeatherForm';
import Alert from '../../components/Alert';
class NotFoundLayout extends React.Component{
    render(){
        return(
            <AppHeader>
                <Alert 
                    isVisible={true} 
                    type="error" title="Miasto nie istnieje" 
                    content="Nie znaleziono miasta o podanej nazwie. Spróbuj ponownie"/>
                    <AppHeaderPageTitle>
                        Wybierz <br /> <strong>miasto </strong>
                    </AppHeaderPageTitle>
                    
                    <WeatherForm />
            </AppHeader>
        );
        
    }
}

export default NotFoundLayout;