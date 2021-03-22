import React from 'react';
import CityBox from '../components/CityBox';
import {setUnit} from '../helpers/setUnit';
class PopularCities extends React.Component{
    COMPARE_TEXT = {
        greater: 'więcej',
        less: 'mniej',
        equal: 'identyczna',
    }
    relDiff(a, b) {
        return  Math.round(a - b,2) ;
    }
    compareCitiesWeatherValue(cityValueCompareTo, cityValue, unit, text = this.COMPARE_TEXT ){
        cityValueCompareTo = parseFloat(cityValueCompareTo);
        cityValue = parseFloat(cityValue);

        const diff = this.relDiff(cityValueCompareTo, cityValue);
        
        if(diff === 0){
            return text.equal;
        }
        else if(diff > 0){
            return `${Math.abs(diff)}${unit} ${text.less}` ;
        }
        else{
            return `${Math.abs(diff)}${unit} ${text.greater}` ;
        }

       
    }
    renderCityBox(name,heat,wind,humidity, key){
        return(
            <div className="col-12 col-sm-6 col-md-3" key={key}>
                <CityBox 
                    city={name} 
                    heat={heat} 
                    wind={wind} 
                    humidity={humidity}
                />
            </div>
        );
    }
    renderCityBoxes(){
  
       if(typeof this.props.compareTo !== 'undefined'){
                return this.props.cities.map((city, index)  =>{
                    var heatValue = this.compareCitiesWeatherValue(this.props.compareTo.heat,city.heat,setUnit('heat') );
                    var windValue = this.compareCitiesWeatherValue(this.props.compareTo.wind,city.wind,setUnit('wind'));
                    var humidity = this.compareCitiesWeatherValue(this.props.compareTo.humidity,city.humidity,setUnit('humidity'));
                    return this.renderCityBox(
                        city.name,
                        heatValue,
                        windValue,
                        humidity,
                        index
                    );
                })
           
        }
        return this.props.cities.map((city, index) =>{
            return this.renderCityBox(
                    city.name,
                    city.heat + setUnit('heat'),
                    city.wind + setUnit('wind'),
                    city.humidity + setUnit('humidity'),
                    index
            );
           
        })
    }

    render(){
        return(
            <React.Fragment>
                    {this.renderCityBoxes()}
            </React.Fragment>
            
        );

    }
}

export default PopularCities;