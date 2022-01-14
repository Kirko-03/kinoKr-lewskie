import style from './Main.module.css'

type MainType={
    poster:string
    res:string
}

export let Main = (props:MainType) =>{ 

    return <div className={style.main}> 
<img  className={style.poster} src={props.poster} alt=""/>
{props.res}
        </div>
}