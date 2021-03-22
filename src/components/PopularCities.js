import React from 'react';
import CityBox from '../components/CityBox';
import {setUnit} from '../helpers/setUnit';

// Wyświetla dane pogodowe miast podanych w props. Dodatkowo może je porównać z dowolnym miastem
class PopularCities extends React.Component{
    // Stała która odpowiada za tłumaczenie gdy wartość jest większa, mniejsza bądź równa
    COMPARE_TEXT = {
        greater: 'więcej',
        less: 'mniej',
        equal: 'identyczna',
    }
    // Zwraca  różnice między dwiema wartościami
    relDiff(a, b) {
        return  Math.round(a - b,2) ;
    }
    // Porównuje dwie wartości w tym przypadku pogodowe i zwraca czy dana wartość jest większa, mniejsza bądź równa. Razem z jednostką
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

    // metoda która zwraca komponent citybox zgodnei z podanymi wartościami w komponencie
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
    // Zwraca listę cityboxów. Dodatkowo sprawdza czy te boxy trzeba porównać z konkretnym miastem.
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