import React from 'react';
import heat_icon from '../assets/heat.svg';
import wind_icon from '../assets/wind.svg';
import humidity_icon from '../assets/humidity.svg';
class WeatherTable extends React.Component{
  
    renderCells(data){
        return data.map(elem => {
            return (<div className="weather-table__col__cell">
                {elem}
            </div>);
        });
    }
    render(){
        
        return(
            <div className="weather-table">
            <h2 className="weather-table__title">
                Aktualna pogoda w {this.props.city}
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
                      <img class="weather-table__icon" src={heat_icon} />
                 </header>
                 {this.renderCells(this.props.data.heat)}
              </div>
              <div className="weather-table__col">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      <img class="weather-table__icon" src={wind_icon} />
                 </header>
                 {this.renderCells(this.props.data.wind)}
              </div>
              <div className="weather-table__col">
                 <header className="weather-table__col__cell weather-table__col__cell--header">
                      <img class="weather-table__icon" src={humidity_icon} />
                 </header>
                 {this.renderCells(this.props.data.humidity)}
              </div>
            </div>
            
          </div>
        );
    }

}

export default WeatherTable;