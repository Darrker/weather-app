
import React from 'react';
import 'bootstrap-4-grid';
import '../style/app.scss';

// Components

import Alert from '../components/Alert';
import AppHeader from '../components/AppHeader';
import AppHeaderPageTitle from '../components/AppHeaderPageTitle';
import WeatherForm from '../components/WeatherForm';
import WeatherTable from '../components/WeatherTable';
import SectionTitle from '../components/SectionTitle';
import CityBox from '../components/CityBox';
// end Components


class App extends React.Component{
  onFormSubmit = () =>{
    console.log('xd');
  }
  render(){
    return (
      <div className="app">
          <AppHeader>
              <Alert isVisible={true} type="error" title="Miasto nie istnieje" content="Nie znaleziono miasta o podanej nazwie. Spróbuj ponownie"/>
                  <AppHeaderPageTitle>
                     Pogoda <br /> <strong>Warszawa</strong>
                  </AppHeaderPageTitle>
                
                  
                  <WeatherForm onSubmit={this.onFormSubmit}/>

                  <WeatherTable
                    city="Lublin"
                    data={{
                      heat: ['15&deg;C','25&deg;C','-15&deg;C'],
                      wind: ['15&deg;C','25&deg;C','-15&deg;C'],
                      humidity: ['15&deg;C','25&deg;C','-15&deg;C'],
                    }}
                  />
               
          </AppHeader>
      
      
          <div className="container ">
            <SectionTitle>
                Warszawa w porównaniu do innych miast
            </SectionTitle>
              <div className="row">
                  <div className="col-12 col-sm-6 col-md-3">
                        <CityBox city="Warszawa" heat="15 stopni" wind="15 stopni" humidity="20"/>
                  </div>
                 
              </div>
      
          </div>
      </div>
          
        );
  }
 
}

export default App;
