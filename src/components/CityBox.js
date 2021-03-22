import React from 'react';
import heat_icon from '../assets/heat.svg';
import wind_icon from '../assets/wind.svg';
import humidity_icon from '../assets/humidity.svg';

// box wyświetaljaćy podstawowe dane pogodowe wybranego miasta
class CityBox extends React.Component{
    render(){
        return(
            <div className="city-box">
                <span className="city-box__name">{this.props.city}</span>
                <span className="city-box__weather-parameter">
                    <img src={heat_icon}  className="city-box__icon" alt="temperatura ikona" />{this.props.heat}
                </span>
                <span className="city-box__weather-parameter">
                    <img src={humidity_icon} className="city-box__icon" alt="wilgotność ikona" />{this.props.humidity}
                </span>

                <span className="city-box__weather-parameter">
                    <img src={wind_icon} className="city-box__icon" alt="wiatr ikona" />{this.props.wind}
                </span>
            </div>
        );
    }
}

export default CityBox;