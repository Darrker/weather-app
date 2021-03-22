import React from 'react';
import Preloader from '../../components/Preloader';
import Alert from '../../components/Alert';

class Layout extends React.Component{
    cities={
        POPULAR: ['warszawa', 'krakow','lublin','wroclaw'],
        RESERVE: 'gdansk'
    }
    state ={
       
        isLoading: true
    }

   
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