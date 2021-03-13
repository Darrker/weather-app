
import 'bootstrap-4-grid';
import '../style/app.scss';
import heat_icon from '../assets/heat.svg';
import wind_icon from '../assets/wind.svg';
import humidity_icon from '../assets/humidity.svg';
function App() {
  return (
<div className="app">
    <header className="app-header">
        <div class="app-header__content">
            <div className="alert alert--error">
              <button className="alert__exit">X</button>
              <span className="alert__title">Miasto nie istnieje</span>
              <span className="alert__content">Nie znaleziono miasta o podanej nazwie. Spróbuj ponownie</span>
            </div>
            <h1 className="app-header__page-title">
                Pogoda <br /> <strong className="app-header__page-title__strong">Warszawa</strong>
            </h1>

            <form action="" className="weather-form">
                <input className="weather-form__field" type="text" name="city" placeholder="Wpisz miasto" />
                <button className="weather-form__button" type="submit">Sprawdź </button>
            </form>

            <div className="weather-table">
              <h2 className="weather-table__title">
                  Aktualna pogoda w Warszawa
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
                  <div className="weather-table__col__cell">
                    15&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    25&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    5&deg;C
                  </div>
                </div>
                <div className="weather-table__col">
                   <header className="weather-table__col__cell weather-table__col__cell--header">
                        <img class="weather-table__icon" src={wind_icon} />
                   </header>
                  <div className="weather-table__col__cell">
                    15&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    25&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    5&deg;C
                  </div>
                </div>
                <div className="weather-table__col">
                   <header className="weather-table__col__cell weather-table__col__cell--header">
                        <img class="weather-table__icon" src={humidity_icon} />
                   </header>
                  <div className="weather-table__col__cell">
                    15&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    25&deg;C
                  </div>
                  <div className="weather-table__col__cell">
                    5&deg;C
                  </div>
                </div>
              </div>
              
            </div>

        </div>

    </header>


    <div className="container ">
        <h3 className="section-title">Warszawa w porównaniu do innych miast</h3>

        <div className="row">
            <div className="col-3">
                <div className="city-box">
                    <span className="city-box__name">Warszawa</span>
                    <span className="city-box__weather-parameter">
                        <img src={heat_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                    <span className="city-box__weather-parameter">
                        <img src={humidity_icon} alt="" className="city-box__icon" />15 stopni
                    </span>

                    <span className="city-box__weather-parameter">
                        <img src={wind_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                </div>
            </div>
            <div className="col-3">
                <div className="city-box">
                    <span className="city-box__name">Warszawa</span>
                    <span className="city-box__weather-parameter">
                        <img src={heat_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                    <span className="city-box__weather-parameter">
                        <img src={humidity_icon} alt="" className="city-box__icon" />15 stopni
                    </span>

                    <span className="city-box__weather-parameter">
                        <img src={wind_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                </div>
            </div>
            <div className="col-3">
                <div className="city-box">
                    <span className="city-box__name">Warszawa</span>
                    <span className="city-box__weather-parameter">
                        <img src={heat_icon} alt="" className="city-box__icon" /><span>Więcej o <strong class="city-box__weather-parameter__difference">15 stopni</strong></span>
                    </span>
                    <span className="city-box__weather-parameter">
                        <img src={humidity_icon} alt="" className="city-box__icon" />15 stopni
                    </span>

                    <span className="city-box__weather-parameter">
                        <img src={wind_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                </div>
            </div>
            <div className="col-3">
                <div className="city-box">
                    <span className="city-box__name">Warszawa</span>
                    <span className="city-box__weather-parameter">
                        <img src={heat_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                    <span className="city-box__weather-parameter">
                        <img src={humidity_icon} alt="" className="city-box__icon" />15 stopni
                    </span>

                    <span className="city-box__weather-parameter">
                        <img src={wind_icon} alt="" className="city-box__icon" />15 stopni
                    </span>
                </div>
            </div>
        </div>

    </div>
</div>
    
  );
}

export default App;
