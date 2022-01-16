import React, { useEffect, useState } from 'react';

import  './App.css';
import { Navbar } from './firstPage/Navbar';
import { Main } from './firstPage/Main';
import { Footer } from './firstPage/Footer';
import { API } from './firstPage/API/API';


function App() {
  let [res,setRes] = useState('')
  let [bigRes,setBigRes] = useState('')
  let [poster,setPoster] = useState('') 

  useEffect(()=>{
    API.apiFunc().then(res=>setRes(`Tytuł:${res.Title},rok:${res.Year},scenarzysta:${res.Writer}, aktorzy:${res.Actors}`))
    API.apiFunc().then(res=>setBigRes(`Tytuł:${res.Title},rok:${res.Year},scenarzysta:${res.Writer}, aktorzy:${res.Actors},oceniany:${res.Rated},
    Wydany:${res.Released},Czas pracy:${res.Runtime},Gatunek muzyczny:${res.Genre},Dyrektor:${res.Director},Wątek:${res.Plot},Język:${res.Language},
    Kraj:${res.Country},Nagrody:${res.Awards}
    `))
    API.apiFunc().then(post=>setPoster(JSON.parse(JSON.stringify(post.Poster))))
},[])  
  return (
    <div className="App">
      <div className="firstPage">
        <div>
          <Navbar/>
        <Main poster={poster} bigRes={bigRes} res={res}/>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
