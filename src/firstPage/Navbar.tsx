import style from './Navbar.module.css'

export let  Navbar = () =>{
return  <div className={style.navbar}> 
     <div>
     <img style={{height:'150px'}}src="https://i.gifer.com/bdg.gif" alt=""/>
     <div style={{marginLeft:'25px'}}>{'Kino Królewskie'.toUpperCase()}</div>
     </div>
     <div className={style.navbarItems}>
     <button>KINO</button>
     <button>SERIALE</button>
     <button>KRESKÓWKI</button>
     <button>ANIME</button>
     <button>WYBORY</button>
     <input placeholder={'Wpisz tytuł'}/>
     </div>
     <button>Wejść</button>
</div>
}