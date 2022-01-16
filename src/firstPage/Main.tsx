import { Cinema } from "./Cinema"


type MainType={
    bigRes:Array<string>
    poster:Array<string>
    res:Array<string>
}

export let Main = (props:MainType) =>{ 

console.log(props);

    return <div> 
<Cinema res={props.res[0]} bigRes={props.bigRes[0]} poster={props.poster[0]}/>
<Cinema res={props.res[1]} bigRes={props.bigRes[1]} poster={props.poster[1]}/>
        </div>
}