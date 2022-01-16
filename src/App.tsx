import React, { useEffect, useState } from 'react';

import  './App.css';
import { Navbar } from './firstPage/Navbar';
import { Main } from './firstPage/Main';
import { Footer } from './firstPage/Footer';
import { API } from './firstPage/API/API';


function App() {
  let [res,setRes] = useState<Array<string>>([])
  let [bigRes,setBigRes] = useState<Array<string>>([])
  let [poster,setPoster] = useState<Array<string>>([]) 

  useEffect(()=>{
    API.apiFunc().then(res=>setRes(res.map(el=>`Tytuł:${el.data.Title},rok:${el.data.Year},scenarzysta:${el.data.Writer}, aktorzy:${el.data.Actors}`)))
    API.apiFunc().then(res=>setBigRes(res.map(el=>`Tytuł:${el.data.Title},rok:${el.data.Year},scenarzysta:${el.data.Writer}, aktorzy:${el.data.Actors},oceniany:${el.data.Rated},
    Wydany:${el.data.Released},Czas pracy:${el.data.Runtime},Gatunek muzyczny:${el.data.Genre},Dyrektor:${el.data.Director},Wątek:${el.data.Plot},Język:${el.data.Language},
    Kraj:${el.data.Country},Nagrody:${el.data.Awards}
    `)))
    API.apiFunc().then(post=>setPoster(JSON.parse(JSON.stringify(post.map(el=>el.data.Poster))))
  )},[])  
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
