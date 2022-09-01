import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards.jsx';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About/About.jsx';
import Ciudad from '../components/City/City.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    return cities.find(c => c.id === parseInt(ciudadId))
  }
  return (
    <div className="App">
       <Route exact path="/">
         <Nav onSearch={onSearch}/>
       </Route>
       <Switch>
         <Route path='/ciudad/:ciudadId'>
          {({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
         </Route>
         <Route exact path="/">
           <Cards cities={cities} onClose={onClose}/>
         </Route>
         <Route path="/about">
           <About/>
         </Route>
       </Switch>
     </div>
  );
}

export default App;
