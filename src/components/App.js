
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import 'bootstrap-4-grid';
import '../style/app.scss';

// Components
import HomeLayout from '../components/layouts/HomeLayout';
import CityLayout from '../components/layouts/CityLayout';
import NotFoundLayout from '../components/layouts/NotFoundLayout';
// End  Layout


class App extends React.Component{

  
  render(){
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeLayout}>
                    
                     

                    </Route>
                    <Route path="/404" component={NotFoundLayout}/>
                
                    <Route path="/:city" exact component={CityLayout}/>
                   
                    <Redirect from='*' to='/404' />
                
                </Switch>
                
            </Router>
        </div>
          
        );
  }
 
}

export default App;
