import { useEffect, useState } from 'react'
import { API } from './API/API'
import style from './Main.module.css'

type PostType = {
    [key: string]: any;
    id: number;
    title: string;
    body: string;
  };

export let Main = () =>{
    let [res,setRes] = useState<Array<PostType>>([]) 
useEffect(()=>{
     API.apiFunc().then(res=>setRes(res.data.map((el:PostType)=>el.body)))
},[])   
console.log(res)
    return <div className={style.main}> 
{res}
        </div>
}