import style from './Navbar.module.css'

export let  Navbar = () =>{
return  <div className={style.navbar}> 
     <img style={{height:'150px'}}src="https://i.gifer.com/bdg.gif" alt=""/>
     <div className={style.navbarItems}>
     <button>KINO</button>
     <button>SERIALE</button>
     <button>KRESKÓWKI</button>
     <button>ANIME</button>
     <button>WYBORY</button>
     <input placeholder={'Введите название'}/>
     </div>
     <button>Войти</button>
</div>
}