import { Cinema } from "./Cinema"


type MainType={
    bigRes:string
    poster:string
    res:string
}

export let Main = (props:MainType) =>{ 

    return <div> 
<Cinema res={props.res} bigRes={props.bigRes} poster={props.poster}/>

<Cinema res={props.res} bigRes={props.bigRes} poster={props.poster}/>

<Cinema res={props.res} bigRes={props.bigRes} poster={props.poster}/>
        </div>
}