import React from 'react';
import Preloader from '../../components/Preloader';
import Alert from '../../components/Alert';

// Abstrakcyjna klasa Layoutu z która posiada wspólne elementy dla kilku layoutów
class Layout extends React.Component{
    // stała z popularnymi danymi
    cities={
        POPULAR: ['warszawa', 'krakow','lublin','wroclaw'],
        RESERVE: 'gdansk'
    }
    state ={
       
        isLoading: true
    }

   // Metoda pozwala wyświetlić dowolny komponent w momencie gdy nie ma żadnych błędów oraz gdy dane są już pobrane
    displayComponentOrError(component){
        if(this.props.error){
            return (<Alert type="error" visible={true} title="Wystąpił błąd" content="Bardzo możliwe, że podane miasto nie istnieje w naszej bazie. Przepraszamy"/>)
        }else{
            if(this.state.isLoading){
                return (<Preloader/>)
            }

            else{
                return component;
            }
        }
    }
}

export default Layout;