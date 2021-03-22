import React from 'react';
import heat_icon from '../assets/heat.svg';
import wind_icon from '../assets/wind.svg';
import humidity_icon from '../assets/humidity.svg';
import {capitalize} from '../helpers/capitalize';
import {setUnit} from '../helpers/setUnit';


// Table wartośći pogodownych z 3 dni dla danego miasta
class WeatherTable extends React.Component{

    // metoda do renderowania kolumn z podaną wartością oraz jednostką
    renderCells(data, type){
        var unit = setUnit(type);
        
        return data.map((elem,index) => {
            return (<div className="weather-table__col__cell" key={index}>
                {elem}{unit}
            </div>);
        });
    }
    render(){
        
        return(
            <div className="weather-table">
            <h2 className="weather-table__title">
                Aktualna pogoda {capitalize(this.props.city)}
            </h2>

            <div className="weather-table__content">
              <div className="weather-table__col weather-table__col--days">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      Kiedy
                 </header>
                <div className="weather-table__col__cell">
                  Dzisiaj
                </div>
                <div className="weather-table__col__cell">
                  Jutro
                </div>
                <div className="weather-table__col__cell">
                  Pojutrze
                </div>
              </div>

              <div className="weather-table__col">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      <img className="weather-table__icon" src={heat_icon} alt="temperatura ikona" />
                 </header>
                 {this.renderCells(this.props.data.heat, 'heat')} 
              </div>
              <div className="weather-table__col">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      <img className="weather-table__icon" src={wind_icon}  alt="wiatr ikona"/>
                 </header>
                 {this.renderCells(this.props.data.wind, 'wind')}
              </div>
              <div className="weather-table__col">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      <img className="weather-table__icon" src={humidity_icon} alt="wilgotność ikona"/>
                 </header>
                 {this.renderCells(this.props.data.humidity, 'humidity')}
              </div>
            </div>
            
          </div>
        );
    }

}

export default WeatherTable;