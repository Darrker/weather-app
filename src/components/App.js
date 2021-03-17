
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

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

// Componetns layout
import CityLayout from '../components/layouts/CityLayout';
import NotFoundLayout from '../components/layouts/NotFoundLayout';
// End components Layout


class App extends React.Component{

  render(){
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                    
                            <AppHeader>
                                    <AppHeaderPageTitle>
                                        Pogoda  <br /> <strong>w zasięgu ręki</strong>
                                    </AppHeaderPageTitle>
                                    
                                    <WeatherForm />
                            </AppHeader>
                        
                        
                            <div className="container ">
                                <SectionTitle>
                                    Popularne miasta
                                </SectionTitle>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-3">
                                            <CityBox city="Warszawa" heat="15 stopni" wind="15 stopni" humidity="20"/>
                                    </div>
                                    
                                </div>
                        
                            </div>
                        

                    </Route>
                    <Route path="/404" component={NotFoundLayout}/>
                
                    <Route path="/:city" component={CityLayout}/>
                
                
                </Switch>
                
            </Router>
        </div>
          
        );
  }
 
}

export default App;
