import React from 'react';
import Layout from '../../components/layouts/Layout';
import AppHeader from '../../components/AppHeader';
import AppHeaderPageTitle from '../../components/AppHeaderPageTitle';
import WeatherForm from '../../components/WeatherForm';
import SectionTitle from '../../components/SectionTitle';
import PopularCities from '../../components/PopularCities';
import { disableErrorAction } from '../../actions/disableErrorAction';
import { getPopularCitiesAction } from '../../actions/getPopularCitiesAction';
import {connect} from 'react-redux';


class HomeLayout extends Layout{
    
    async componentDidMount(){
        this.props.disableError();
           this.setState({isLoading: true});
         
            await this.props.getPopularCitiesAction([...this.cities.POPULAR]);
                           
                          
            if(!this.props.error){
                this.setState(
                    {isLoading: false,
                   
                    }
                );
        
             
            }
           
            
        }
        onSubmitWeatherForm = (city)=>{
            this.props.history.push(`/${city.toLowerCase()}`);
            
            
        } 
    render(){
        return(
            <React.Fragment>
                <AppHeader>
                        <AppHeaderPageTitle>
                            Pogoda  <br /> <strong>w zasięgu ręki</strong>
                        </AppHeaderPageTitle>
                        
                        <WeatherForm onSubmit={this.onSubmitWeatherForm}/>
                </AppHeader>


                <div className="container app__city-box-area ">
                    <SectionTitle>
                        Popularne miasta
                    </SectionTitle>
                    <div className="row">
                    {this.displayComponentOrError(
                        <PopularCities 
                        cities={this.props.popularCities}
                        
                        />
                    )}
                        
                    </div>

                </div>

            </React.Fragment>
      

        );
    }
}
const mapStateToProps = state =>{
   
    return {error: state.error,
            popularCities: state.popularCities,
           
        };   
}


export default connect(mapStateToProps, {getPopularCitiesAction, disableError: disableErrorAction})(HomeLayout);