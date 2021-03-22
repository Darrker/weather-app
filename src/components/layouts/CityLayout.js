import React from 'react';
import Layout from '../../components/layouts/Layout';
import AppHeader from '../../components/AppHeader';
import AppHeaderPageTitle from '../../components/AppHeaderPageTitle';
import WeatherForm from '../../components/WeatherForm';
import WeatherTable from '../../components/WeatherTable';
import SectionTitle from '../../components/SectionTitle';
import PopularCities from '../../components/PopularCities';


import removeAccents from 'remove-accents';



import {connect} from 'react-redux';
import { getCityAction } from '../../actions/getCityAction';
import { getPopularCitiesAction } from '../../actions/getPopularCitiesAction';
import { disableErrorAction } from '../../actions/disableErrorAction';
class CityLayout extends Layout{
   
    state={
        popularCities: [],
        reserveCity: [],
        citiesToDisplay: [],
        currentCityNowData: [],
        isLoading: true,
    }
        
   async componentDidMount(){
    this.props.disableError();
       this.setState({isLoading: true});
     
        await Promise.all([this.props.getPopularCitiesAction([...this.cities.POPULAR, this.cities.RESERVE]),
                        this.props.getCityWeatherData(this.props.match.params.city)])
                      
        if(!this.props.error){
            this.setState(
                {isLoading: false,
                 popularCities: this.props.popularCities.slice(0, -1),
                 reserveCity: this.props.popularCities[this.props.popularCities.length-1]     
                }
            );
    
            this.setCurrentCityNowData(this.props.currentCity);
            this.setPopularCitiesToDisplay();
        }
       
        
    }

    setPopularCitiesToDisplay(){
       var theSameCityIndex =  this.state.popularCities.findIndex(city => city.name === this.props.match.params.city);
    
        if(theSameCityIndex !== -1){
           
            var tempCities = [...this.state.popularCities];
            tempCities[theSameCityIndex] = this.state.reserveCity;
            this.setState({citiesToDisplay: tempCities});
        }else{
            this.setState({citiesToDisplay: this.state.popularCities}); 
        }
    }

    setCurrentCityNowData(dataToParse){
        this.setState({
            currentCityNowData: {
                heat: dataToParse.heat[0],
                wind: dataToParse.wind[0],
                humidity: dataToParse.humidity[0],
            }
        })
    }

    onFormSubmit = async city =>{
        this.props.disableError();
        this.props.history.push(`/${city.toLowerCase()}`);
        this.setState({isLoading: true});
        city = removeAccents(city.toLowerCase());
        await this.props.getCityWeatherData(`/${city.toLowerCase()}`);
        if(!this.props.error){
           
            this.setCurrentCityNowData(this.props.currentCity);
            this.setPopularCitiesToDisplay();
            this.setState({isLoading: false});
        }
       
       
    }


    render(){
       
        return(
            <React.Fragment>
               
            <AppHeader>
                
                    <AppHeaderPageTitle>
                        Pogoda <br /> <strong>{this.props.match.params.city}</strong>
                    </AppHeaderPageTitle>
                    
                    
                    <WeatherForm value={this.props.match.params.city} onSubmit={this.onFormSubmit}/>
                    {this.displayComponentOrError(
                        <WeatherTable
                        city={this.props.match.params.city}
                        data={this.props.currentCity}
                    />
                    )}
                  
            </AppHeader>
        
        
            <div className="container app__city-box-area ">
                <SectionTitle>
                    {this.props.match.params.city} w porównaniu do innych miast
                </SectionTitle>
                <div className="row">
                {this.displayComponentOrError(
                    <PopularCities 
                        cities={this.state.citiesToDisplay}
                        compareTo={this.state.currentCityNowData}
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
            currentCity: state.currentCity,    
        };   
}

export default connect(mapStateToProps, {getCityWeatherData: getCityAction, getPopularCitiesAction, disableError: disableErrorAction})(CityLayout);