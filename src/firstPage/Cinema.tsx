import { useState } from 'react'
import style from './Main.module.css'

type MainType={
    bigRes:string
    poster:string
    res:string
}

export let Cinema = (props:MainType) =>{
    let [fullInfo,setFullInfo] = useState<boolean>(false)
return <div className={style.cinema}>
    <img  className={style.poster} src={props.poster} alt=""/>
{
 fullInfo?props.bigRes:props.res
}
<button onClick={()=>setFullInfo(!fullInfo)}>{fullInfo?'hide':'open'}</button>

</div>

}