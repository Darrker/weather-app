import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppHeaderPageTitle from '../../components/AppHeaderPageTitle';
import WeatherForm from '../../components/WeatherForm';
import WeatherTable from '../../components/WeatherTable';
import SectionTitle from '../../components/SectionTitle';
import CityBox from '../../components/CityBox';




class CityLayout extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props);
    }
    render(){
        return(
            <React.Fragment>
                {/* <Redirect to="/404"/> */}
            <AppHeader>
                
                    <AppHeaderPageTitle>
                        Pogoda <br /> <strong>{this.props.match.params.city}</strong>
                    </AppHeaderPageTitle>
                    
                    
                    <WeatherForm value={this.props.match.params.city} onSubmit={this.onFormSubmit}/>

                    <WeatherTable
                        city={this.props.match.params.city}
                        data={{
                        heat: ['15&deg;C','25&deg;C','-15&deg;C'],
                        wind: ['15&deg;C','25&deg;C','-15&deg;C'],
                        humidity: ['15&deg;C','25&deg;C','-15&deg;C'],
                        }}
                    />
                
            </AppHeader>
        
        
            <div className="container ">
                <SectionTitle>
                    {this.props.match.params.city} w porównaniu do innych miast
                </SectionTitle>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                            <CityBox city="Warszawa" heat="15 stopni" wind="15 stopni" humidity="20"/>
                    </div>
                    
                </div>
        
            </div>
        </React.Fragment>
        );
    }
}

export default CityLayout;